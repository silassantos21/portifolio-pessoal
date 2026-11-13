"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ProjectLightbox } from "@/components/project-lightbox";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 4500;

export function ProjectCarousel({
  slug,
  name,
  screenshots,
}: {
  slug: string;
  name: string;
  screenshots: string[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (paused || lightboxOpen || screenshots.length <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % screenshots.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(id);
  }, [paused, lightboxOpen, screenshots.length]);

  const step = (delta: number) =>
    setIndex(
      (current) => (current + delta + screenshots.length) % screenshots.length
    );

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.25),hsl(var(--card))_72%)] sm:aspect-[16/11]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={screenshots[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 p-3 sm:p-4"
          >
            <Image
              src={`/projects/${slug}/${screenshots[index]}`}
              alt={`${name}: print ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-contain drop-shadow-md"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`${name}: ampliar print ${index + 1}`}
          className="absolute inset-0"
        />

        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Print anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 p-1.5 text-foreground opacity-80 shadow-sm transition-opacity hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Próximo print"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 p-1.5 text-foreground opacity-80 shadow-sm transition-opacity hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        )}
      </div>

      {screenshots.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {screenshots.map((file, i) => (
            <button
              key={file}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir para o print ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-border hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      )}

      {lightboxOpen && (
        <ProjectLightbox
          slug={slug}
          name={name}
          screenshots={screenshots}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
