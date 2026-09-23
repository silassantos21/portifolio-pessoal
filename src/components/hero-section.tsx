"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/use-typewriter";

export function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const role = useTypewriter(t("role"));

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center gap-6 overflow-hidden p-8 text-center">
      <div
        className="bg-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />

      <p className="relative text-sm uppercase tracking-widest text-muted-foreground">
        {t("greeting")}
      </p>
      <h1 className="relative text-4xl font-bold tracking-tight sm:text-6xl">
        {t("name")}
      </h1>
      <p className="relative h-7 text-lg text-primary">
        {role}
        <span className="animate-pulse">|</span>
      </p>
      <p className="relative max-w-xl text-muted-foreground">{t("tagline")}</p>
      <div className="relative flex flex-wrap justify-center gap-4">
        <Button asChild>
          <a href="#contact">{t("ctaContact")}</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#projects">{t("ctaProjects")}</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href={`/resume-${locale}.pdf`} download>
            <Download className="size-4" aria-hidden="true" />
            {t("ctaResume")}
          </a>
        </Button>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-6" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
