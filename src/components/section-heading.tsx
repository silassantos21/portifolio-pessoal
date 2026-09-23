"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}
