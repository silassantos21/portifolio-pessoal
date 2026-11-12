"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ProjectGallery({
  slug,
  name,
  screenshots,
}: {
  slug: string;
  name: string;
  screenshots: string[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + screenshots.length) % screenshots.length
      ),
    [screenshots.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, step]);

  return (
    <>
      <div className="no-scrollbar -mx-1 flex gap-3 overflow-x-auto px-1 pb-1">
        {screenshots.map((file, index) => (
          <button
            key={file}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`${name}: ver print ${index + 1} em tamanho grande`}
            className="relative h-28 w-48 shrink-0 overflow-hidden rounded-md border border-border/60 transition-opacity hover:opacity-90 sm:h-32 sm:w-56"
          >
            <Image
              src={`/projects/${slug}/${file}`}
              alt={`${name}: print ${index + 1}`}
              fill
              sizes="224px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${name}: galeria de prints`}
          >
            <button
              type="button"
              onClick={close}
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
                    step(-1);
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
                    step(1);
                  }}
                  aria-label="Próximo print"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 p-2 text-foreground transition-colors hover:bg-accent sm:right-4"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              onClick={(event) => event.stopPropagation()}
              className="relative h-[min(80vh,900px)] w-full max-w-4xl"
            >
              <Image
                src={`/projects/${slug}/${screenshots[openIndex]}`}
                alt={`${name}: print ${openIndex + 1}`}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
