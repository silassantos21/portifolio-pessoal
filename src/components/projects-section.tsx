"use client";

import { useTranslations } from "next-intl";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/data/projects";

interface ProjectContent {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const tNav = useTranslations("Nav");
  const items = t.raw("items") as ProjectContent[];

  return (
    <section
      id="projects"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <SectionHeading
        eyebrow={`02 — ${tNav("projects")}`}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="mt-8 space-y-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            content={items[index]}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
