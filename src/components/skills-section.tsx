"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const SKILLS = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Figma", icon: SiFigma },
] as const;

export function SkillsSection() {
  const t = useTranslations("Skills");

  return (
    <section
      id="skills"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{t("subtitle")}</p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {SKILLS.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="flex flex-col items-center gap-2 rounded-lg border border-border/60 bg-card p-4 text-center transition-colors hover:border-primary/40"
          >
            <Icon className="size-8" aria-hidden="true" />
            <span className="text-xs text-muted-foreground">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
