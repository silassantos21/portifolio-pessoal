import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const { name, email, message, company } = parsed.data;

  // Honeypot preenchido = bot. Responde como sucesso para não denunciar o filtro.
  if (company) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    console.log(
      "[api/contact] Resend não configurado ainda. Mensagem recebida:",
      { name, email, message }
    );
    return NextResponse.json(
      { error: "email_not_configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfólio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Novo contato pelo portfólio — ${name}`,
    text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
  });

  if (error) {
    console.error("[api/contact] Falha ao enviar via Resend:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
