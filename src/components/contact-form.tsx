"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  createContactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const [status, setStatus] = useState<Status>("idle");

  const schema = createContactSchema({
    nameMin: t("nameMin"),
    emailInvalid: t("emailInvalid"),
    messageMin: t("messageMin"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("request failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mt-8 max-w-xl space-y-5"
    >
      {/* Honeypot — invisível para pessoas, atrativo para bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">{t("name")}</Label>
        <Input id="name" autoComplete="name" {...register("name")} />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea id="message" {...register("message")} />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {status === "sending" ? t("sending") : t("submit")}
        </Button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-sm text-emerald-500">
            <CheckCircle2 className="size-4" aria-hidden="true" />
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-destructive">
            <XCircle className="size-4" aria-hidden="true" />
            {t("error")}
          </p>
        )}
      </div>
    </form>
  );
}
