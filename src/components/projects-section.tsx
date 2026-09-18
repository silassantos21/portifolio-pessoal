"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types/project";

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json() as Promise<Project[]>;
      })
      .then((data) => {
        if (active) setProjects(data);
      })
      .catch(() => {
        if (active) setError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="projects"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{t("subtitle")}</p>

      {error && <p className="mt-8 text-sm text-destructive">{t("error")}</p>}

      {!error && !projects && (
        <p className="mt-8 text-sm text-muted-foreground">{t("loading")}</p>
      )}

      {projects && projects.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
