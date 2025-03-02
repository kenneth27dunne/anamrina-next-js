import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,  // GoDaddy SMTP server
      port: process.env.EMAIL_PORT,  // Port 465 (SSL) or 587 (TLS)
      secure: true,  // Use true for port 465, false for port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,  // Your GoDaddy email (receiving address)
      subject: `New Contact Form Submission from ${name}`,
      text: message,
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
