"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ProjectLightbox({
  slug,
  name,
  screenshots,
  index,
  onIndexChange,
  onClose,
}: {
  slug: string;
  name: string;
  screenshots: string[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        onIndexChange((index + 1) % screenshots.length);
      }
      if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + screenshots.length) % screenshots.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, screenshots.length, onIndexChange, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${name}: galeria de prints`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 rounded-full border border-border/60 bg-background/80 p-2 text-foreground transition-colors hover:bg-accent"
        >
          <X className="size-5" />
        </button>

        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onIndexChange(
                  (index - 1 + screenshots.length) % screenshots.length
                );
              }}
              aria-label="Print anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 p-2 text-foreground transition-colors hover:bg-accent sm:left-4"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onIndexChange((index + 1) % screenshots.length);
              }}
              aria-label="Próximo print"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 p-2 text-foreground transition-colors hover:bg-accent sm:right-4"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.15 }}
          onClick={(event) => event.stopPropagation()}
          className="relative h-[min(80vh,900px)] w-full max-w-4xl"
        >
          <Image
            src={`/projects/${slug}/${screenshots[index]}`}
            alt={`${name}: print ${index + 1}`}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
