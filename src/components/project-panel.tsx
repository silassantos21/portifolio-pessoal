"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

import { ProjectCarousel } from "@/components/project-carousel";
import type { ShowcaseProject } from "@/data/projects";

interface ProjectContent {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export function ProjectPanel({
  project,
  content,
}: {
  project: ShowcaseProject;
  content: ProjectContent;
}) {
  const t = useTranslations("Projects");

  return (
    <div className="card-glow grid gap-8 rounded-xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div>
        <h3 className="text-2xl font-semibold">{content.name}</h3>
        <p className="mt-1.5 text-base text-primary">{content.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          {content.description}
        </p>

        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          {content.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            <FaGithub className="size-4" />
            {t("viewCode")}
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <ArrowUpRight className="size-4" />
              {t("viewDemo")}
            </a>
          )}
        </div>
      </div>

      <ProjectCarousel
        slug={project.slug}
        name={content.name}
        screenshots={project.screenshots}
      />
    </div>
  );
}
