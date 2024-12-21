import ContactFormEmail from "@/components/contact/contact-form-email";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY);

export const server = {
  // action declarations
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      message: z.string(),
    }),
    handler: async ({ email, message }) => {
      // send email
      // console.log(`Email: ${email}, Message: ${message}`);
      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "santiagoquirumbay10@gmail.com",
        subject: "Message from contact form",
        replyTo: email,
        react: React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: email,
        }),
      });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }
      return data;
    },
  }),
};
