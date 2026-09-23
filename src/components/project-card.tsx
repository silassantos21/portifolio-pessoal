"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

import type { Project } from "@/types/project";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const t = useTranslations("Projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-glow group flex flex-col justify-between rounded-lg border border-border/60 bg-card p-6 shadow-sm"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{project.name}</h3>
          {project.stars > 0 && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="size-3.5" />
              {project.stars}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.description ?? "—"}
        </p>
        {project.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap font-medium underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          {t("viewCode")}
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap font-medium underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {t("viewDemo")}
          </a>
        )}
        {project.language && (
          <span className="ml-auto whitespace-nowrap text-xs text-muted-foreground">
            {project.language}
          </span>
        )}
      </div>
    </motion.div>
  );
}
