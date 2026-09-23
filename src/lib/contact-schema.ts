import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  message: z.string().trim().min(10).max(2000),
  // Campo honeypot: deve permanecer vazio. Se preenchido, é um bot.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

type ContactFormMessages = {
  nameMin: string;
  emailInvalid: string;
  messageMin: string;
};

export function createContactSchema(messages: ContactFormMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.nameMin).max(100),
    email: z.email(messages.emailInvalid).max(200),
    message: z.string().trim().min(10, messages.messageMin).max(2000),
    company: z.string().max(0).optional().or(z.literal("")),
  });
}
