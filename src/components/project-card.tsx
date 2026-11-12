"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

import { ProjectGallery } from "@/components/project-gallery";
import type { ShowcaseProject } from "@/data/projects";

interface ProjectContent {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export function ProjectCard({
  project,
  content,
  index,
}: {
  project: ShowcaseProject;
  content: ProjectContent;
  index: number;
}) {
  const t = useTranslations("Projects");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-glow rounded-lg border border-border/60 bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{content.name}</h3>
          <p className="mt-1 text-sm text-primary">{content.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
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

      <div className="mt-6">
        <ProjectGallery
          slug={project.slug}
          name={content.name}
          screenshots={project.screenshots}
        />
      </div>

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
    </motion.article>
  );
}
