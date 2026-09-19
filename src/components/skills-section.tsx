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
  SiVuedotjs,
} from "react-icons/si";

const SKILLS = [
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Angular", icon: SiAngular },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PHP", icon: SiPhp },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
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
