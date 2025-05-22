import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,  
      port: process.env.EMAIL_PORT, // Use 587 for TLS
      secure: false, // Must be false for TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Sometimes needed for GoDaddy
      }
    });
    

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,//process.env.EMAIL_USER,  // Your GoDaddy email (receiving address)
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
