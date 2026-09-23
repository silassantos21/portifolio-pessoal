"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { SectionHeading } from "@/components/section-heading";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export function EducationSection() {
  const t = useTranslations("Education");
  const tNav = useTranslations("Nav");
  const items = t.raw("items") as EducationItem[];

  return (
    <section
      id="education"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <SectionHeading
        eyebrow={`05 — ${tNav("education")}`}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <motion.div
            key={`${item.institution}-${index}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="card-glow rounded-lg border border-border/60 bg-card p-6"
          >
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {item.period}
            </p>
            <h3 className="mt-1 font-semibold">{item.degree}</h3>
            <p className="text-sm text-muted-foreground">{item.institution}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
