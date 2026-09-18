"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/use-typewriter";

export function HeroSection() {
  const t = useTranslations("Hero");
  const role = useTypewriter(t("role"));

  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center gap-6 p-8 text-center">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        {t("greeting")}
      </p>
      <h1 className="text-4xl font-bold sm:text-6xl">{t("name")}</h1>
      <p className="h-7 text-lg text-muted-foreground">
        {role}
        <span className="animate-pulse">|</span>
      </p>
      <p className="max-w-xl text-muted-foreground">{t("tagline")}</p>
      <div className="flex gap-4">
        <Button asChild>
          <a href="#contact">{t("ctaContact")}</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#projects">{t("ctaProjects")}</a>
        </Button>
      </div>
    </section>
  );
}
