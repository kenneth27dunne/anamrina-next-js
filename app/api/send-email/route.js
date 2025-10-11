import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Helper to prettify field names
    function prettifyFieldName(str) {
      // Convert camelCase or snake_case to Title Case
      return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .replace(/^\w/, c => c.toUpperCase())
        .replace(/\b\w/g, c => c.toUpperCase());
    }

    let emailBody = `New Contact Form Submission\n\n`;
    let emailBodyHtml = `<h2>New Contact Form Submission</h2>`;

    for (const [key, value] of Object.entries(data)) {
      if (key === "message") continue; // We'll add message at the end
      if (value) {
        // Handle arrays (e.g., multi-select fields)
        const displayValue = Array.isArray(value) ? value.join(", ") : value;
        emailBody += `${prettifyFieldName(key)}: ${displayValue}\n`;
        emailBodyHtml += `<p><strong>${prettifyFieldName(key)}:</strong> ${displayValue}</p>`;
      }
    }

    // Add message at the end
    emailBody += `Message:\n${data.message || ""}\n`;
    emailBodyHtml += `<p><strong>Message:</strong><br/>${(data.message || "").replace(/\n/g, "<br/>")}</p>`;
    
    // console.log(emailBody);
    // console.log(emailBodyHtml);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,  
      port: process.env.EMAIL_PORT, // Use 587 for TLS
      secure: process.env.EMAIL_TLS === "true", // Must be false for TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.EMAIL_TLS === "true", // Sometimes needed for GoDaddy
      }
    });

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailBody,
      html: emailBodyHtml,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
    
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: "Email not sent" }), {
      status: 500,
    });
  }
}
