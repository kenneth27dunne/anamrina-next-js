import nodemailer from "nodemailer";
import {
  checkContactRateLimit,
  getClientIp,
  pickContactEmailFields,
  validateContactAntiSpam,
} from "../../lib/contactFormGuards";

function prettifyFieldName(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getMailConfig() {
  const host = process.env.EMAIL_HOST;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO || user;
  const port = Number(process.env.EMAIL_PORT) || 587;

  if (!host || !user || !pass) {
    return { error: "Email is not configured on the server." };
  }

  if (!to) {
    return { error: "Email recipient (EMAIL_TO) is not configured." };
  }

  const secure = process.env.EMAIL_TLS === "true" || port === 465;

  return {
    transporter: nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      ...(port === 587 && !secure ? { requireTLS: true } : {}),
    }),
    user,
    to,
  };
}

function smtpErrorMessage(error) {
  if (error?.code === "EAUTH") {
    return "Email server rejected the login. Check SMTP credentials.";
  }
  if (error?.code === "ESOCKET" || error?.code === "ECONNECTION") {
    return "Could not connect to the email server. Check host, port, and TLS settings.";
  }
  return "Email could not be sent. Please try again later.";
}

async function verifySmtp(transporter) {
  if (process.env.EMAIL_SMTP_VERIFY === "false") return;
  await transporter.verify();
}

export async function GET() {
  const mail = getMailConfig();
  if (mail.error) {
    return Response.json({ ok: false, error: mail.error }, { status: 503 });
  }

  try {
    await verifySmtp(mail.transporter);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[send-email] SMTP verify failed:", error?.code || error?.message || error);
    return Response.json(
      { ok: false, error: smtpErrorMessage(error) },
      { status: 503 }
    );
  }
}

export async function POST(req) {
  try {
    const mail = getMailConfig();
    if (mail.error) {
      console.error("[send-email] config:", mail.error);
      return Response.json({ success: false, error: mail.error }, { status: 503 });
    }

    const raw = await req.json();
    const ip = getClientIp(req);

    const rate = checkContactRateLimit(ip);
    if (rate.limited) {
      return Response.json(
        { success: false, error: "Too many messages sent. Please try again later." },
        { status: 429 }
      );
    }

    const spam = validateContactAntiSpam(raw);
    if (spam.blocked) {
      if (spam.silent) {
        console.info("[send-email] blocked", { reason: spam.reason, ip });
        return Response.json({ success: true });
      }
      return Response.json({ success: false, error: spam.message }, { status: 400 });
    }

    const data = pickContactEmailFields(raw);

    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      return Response.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await verifySmtp(mail.transporter);

    let emailBody = "New Contact Form Submission\n\n";
    let emailBodyHtml = "<h2>New Contact Form Submission</h2>";

    for (const [key, value] of Object.entries(data)) {
      if (key === "message") continue;
      if (value) {
        const displayValue = Array.isArray(value) ? value.join(", ") : value;
        emailBody += `${prettifyFieldName(key)}: ${displayValue}\n`;
        emailBodyHtml += `<p><strong>${prettifyFieldName(key)}:</strong> ${displayValue}</p>`;
      }
    }

    emailBody += `Message:\n${data.message}\n`;
    emailBodyHtml += `<p><strong>Message:</strong><br/>${String(data.message).replace(/\n/g, "<br/>")}</p>`;

    const info = await mail.transporter.sendMail({
      from: `"Anamrina Website" <${mail.user}>`,
      replyTo: `"${data.name}" <${data.email}>`,
      to: mail.to,
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailBody,
      html: emailBodyHtml,
    });

    if (info.rejected?.length > 0) {
      console.error("[send-email] rejected recipients:", info.rejected);
      return Response.json(
        { success: false, error: "Email server refused the recipient address." },
        { status: 502 }
      );
    }

    if (!info.accepted?.length) {
      console.error("[send-email] no accepted recipients", { to: mail.to, info });
      return Response.json(
        { success: false, error: "Email server did not accept the message." },
        { status: 502 }
      );
    }

    console.info("[send-email] sent", {
      messageId: info.messageId,
      to: mail.to,
      accepted: info.accepted,
    });

    return Response.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("[send-email] failed:", error?.code || error?.message || error);
    return Response.json(
      { success: false, error: smtpErrorMessage(error) },
      { status: 500 }
    );
  }
}
