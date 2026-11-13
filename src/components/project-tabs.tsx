"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ProjectPanel } from "@/components/project-panel";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectContent {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export function ProjectTabs() {
  const t = useTranslations("Projects");
  const items = t.raw("items") as ProjectContent[];
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  return (
    <div className="mt-8">
      <div
        role="tablist"
        aria-label={t("title")}
        className="no-scrollbar flex gap-2 overflow-x-auto pb-2"
      >
        {PROJECTS.map((project, index) => (
          <button
            key={project.slug}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`project-tab-${project.slug}`}
            aria-selected={active === index}
            aria-controls={`project-panel-${project.slug}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                focusTab((index + 1) % PROJECTS.length);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                focusTab((index - 1 + PROJECTS.length) % PROJECTS.length);
              }
              if (event.key === "Home") {
                event.preventDefault();
                focusTab(0);
              }
              if (event.key === "End") {
                event.preventDefault();
                focusTab(PROJECTS.length - 1);
              }
            }}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === index
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border/60 bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {items[index].name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={PROJECTS[active].slug}
          role="tabpanel"
          id={`project-panel-${PROJECTS[active].slug}`}
          aria-labelledby={`project-tab-${PROJECTS[active].slug}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-6"
        >
          <ProjectPanel project={PROJECTS[active]} content={items[active]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
