import nodemailer from "nodemailer";
import { ContactFormData } from "@/lib/validators/contact";

function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
}

export async function sendContactEmail(data: ContactFormData) {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: data.email,
    subject: `New message from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br/>")}</p>
    `,
  });
}

export async function sendOtpEmail(email: string, otp: string) {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Rohit Alam Portfolio" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your email — OTP Code",
    text: `Your verification code is: ${otp}\n\nThis code expires in 10 minutes.`,
    html: `
      <h2>Verify Your Email</h2>
      <p>Your verification code is:</p>
      <h1 style="letter-spacing: 4px;">${otp}</h1>
      <p>This code expires in 10 minutes.</p>
    `,
  });
}
