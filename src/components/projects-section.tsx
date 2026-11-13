"use client";

import { useTranslations } from "next-intl";

import { ProjectTabs } from "@/components/project-tabs";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const tNav = useTranslations("Nav");

  return (
    <section
      id="projects"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <SectionHeading
        eyebrow={`02. ${tNav("projects")}`}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <ProjectTabs />
    </section>
  );
}
