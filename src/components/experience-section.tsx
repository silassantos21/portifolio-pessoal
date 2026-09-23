"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { SectionHeading } from "@/components/section-heading";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const tNav = useTranslations("Nav");
  const items = t.raw("items") as ExperienceItem[];

  return (
    <section
      id="experience"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <SectionHeading
        eyebrow={`04 — ${tNav("experience")}`}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <ol className="mt-10 space-y-10 border-l border-border/60 pl-8">
        {items.map((item, index) => (
          <motion.li
            key={`${item.company}-${index}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[2.1rem] flex size-6 items-center justify-center rounded-full border border-primary/50 bg-background text-xs font-medium text-primary">
              {index + 1}
            </span>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {item.period}
            </p>
            <h3 className="mt-1 font-semibold">
              {item.role} · {item.company}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
