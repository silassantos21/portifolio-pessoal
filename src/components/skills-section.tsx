"use client";

import { motion } from "framer-motion";
import { Cloud, Database } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  SiAngular,
  SiCss,
  SiDjango,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiJira,
  SiJunit5,
  SiKeycloak,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPinia,
  SiPostgresql,
  SiPython,
  SiQuasar,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";

import { SectionHeading } from "@/components/section-heading";

const SKILLS = [
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Angular", icon: SiAngular },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PHP", icon: SiPhp },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "Quasar", icon: SiQuasar },
  { name: "Pinia", icon: SiPinia },
  { name: "Ionic", icon: SiIonic },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Java", icon: SiOpenjdk },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Oracle", icon: Database },
  { name: "Microsoft Azure", icon: Cloud },
  { name: "Git", icon: SiGit },
  { name: "GitLab", icon: SiGitlab },
  { name: "Jira", icon: SiJira },
  { name: "JUnit", icon: SiJunit5 },
  { name: "Keycloak", icon: SiKeycloak },
] as const;

export function SkillsSection() {
  const t = useTranslations("Skills");
  const tNav = useTranslations("Nav");

  return (
    <section
      id="skills"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <SectionHeading
        eyebrow={`03 — ${tNav("skills")}`}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {SKILLS.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="card-glow flex flex-col items-center gap-2 rounded-lg border border-border/60 bg-card p-4 text-center"
          >
            <Icon className="size-8" aria-hidden="true" />
            <span className="text-xs text-muted-foreground">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
