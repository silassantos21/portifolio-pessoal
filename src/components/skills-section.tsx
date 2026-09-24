"use client";

import { Cloud, Database } from "lucide-react";
import { useTranslations } from "next-intl";
import type { IconType } from "react-icons";
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
import { cn } from "@/lib/utils";

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

const MID = Math.ceil(SKILLS.length / 2);
const ROW_1 = SKILLS.slice(0, MID);
const ROW_2 = SKILLS.slice(MID);

function SkillCard({ name, icon: Icon }: { name: string; icon: IconType }) {
  return (
    <div className="card-glow flex w-32 shrink-0 flex-col items-center gap-2 rounded-lg border border-border/60 bg-card p-4 text-center">
      <Icon className="size-8" aria-hidden="true" />
      <span className="text-xs text-muted-foreground">{name}</span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: readonly { name: string; icon: IconType }[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee-mask group overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} {...skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const t = useTranslations("Skills");
  const tNav = useTranslations("Nav");

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border/40 py-24"
    >
      <div className="container">
        <SectionHeading
          eyebrow={`03 — ${tNav("skills")}`}
          title={t("title")}
          subtitle={t("subtitle")}
        />
      </div>

      <div className="mt-8 space-y-4">
        <MarqueeRow items={ROW_1} />
        <MarqueeRow items={ROW_2} reverse />
      </div>
    </section>
  );
}
