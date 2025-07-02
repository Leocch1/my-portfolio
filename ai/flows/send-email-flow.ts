'use server';
/**
 * @fileOverview An email sending flow using Resend.
 *
 * - sendEmail - A function that handles sending the contact form data.
 * - SendEmailInput - The input type for the sendEmail function.
 * - SendEmailOutput - The return type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

const SendEmailInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  organization: z.string().optional(),
  message: z.string(),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set.');
        return { success: false, message: 'Server configuration error.' };
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // Default Resend address, easy for testing
        to: 'leolouise26@gmail.com', // Your email address
        subject: `Contact Form Submission from ${input.name}`,
        html: `
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Organization:</strong> ${input.organization || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });
      return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Failed to send email:', error);
      return { success: false, message: 'Failed to send email.' };
    }
  }
);
