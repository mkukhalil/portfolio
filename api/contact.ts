import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Inline schema to avoid deployment import issues
const insertMessageSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Validate request body
        const validatedData = insertMessageSchema.parse(req.body);
        const { name, email, message } = validatedData;

        // Check for environment variables
        const gmailUser = process.env.GMAIL_USER;
        const gmailPass = process.env.GMAIL_APP_PASSWORD;

        if (!gmailUser || !gmailPass) {
            console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: gmailUser,
                pass: gmailPass,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${gmailUser}>`,
            to: gmailUser,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
          <h2 style="color: #0f172a; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin-bottom: 15px;">
            <strong style="color: #475569;">Name:</strong>
            <span style="color: #0f172a; margin-left: 10px;">${name}</span>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #475569;">Email:</strong>
            <span style="color: #0f172a; margin-left: 10px;"><a href="mailto:${email}">${email}</a></span>
          </div>
          <div style="margin-top: 25px; padding: 15px; background-color: #f8fafc; border-radius: 4px;">
            <strong style="display: block; color: #475569; margin-bottom: 10px;">Message:</strong>
            <p style="color: #334155; line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 0.875rem; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px;">
            Sent from your Portfolio Website Contact Form.
          </footer>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: 'Thank you! Your message has been sent successfully.'
        });
    } catch (error: any) {
        console.error('Email handling error:', error);

        if (error.name === 'ZodError') {
            return res.status(400).json({
                message: 'Invalid form data',
                errors: error.errors
            });
        }

        return res.status(500).json({
            message: 'Failed to send message. Please try again later.'
        });
    }
}
