import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  message: z.string().trim().min(10).max(2000),
  // Campo honeypot: pessoas deixam vazio; bots costumam preencher.
  // Não deve ter validação que rejeite o preenchimento — quem decide o
  // que fazer com um valor não vazio é o handler (resposta de sucesso
  // falsa, sem denunciar o filtro), não o schema.
  company: z.string().max(200).optional().or(z.literal("")),
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
    company: z.string().max(200).optional().or(z.literal("")),
  });
}
