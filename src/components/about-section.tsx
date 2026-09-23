"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { SectionHeading } from "@/components/section-heading";
import { SITE_CONFIG } from "@/config/site";

export function AboutSection() {
  const t = useTranslations("About");
  const tNav = useTranslations("Nav");

  return (
    <section
      id="about"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative mx-auto size-40 overflow-hidden rounded-full ring-2 ring-primary/40 ring-offset-4 ring-offset-background md:mx-0"
        >
          <Image
            src="/profile.jpg"
            alt={SITE_CONFIG.name}
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow={`01 — ${tNav("about")}`}
            title={t("title")}
            subtitle={t("subtitle")}
          />
          <p className="mt-6 max-w-2xl leading-relaxed text-foreground/90">
            {t("bio")}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("socialLinks.github")}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("socialLinks.linkedin")}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaLinkedin className="size-5" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              aria-label={t("socialLinks.email")}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <HiOutlineMail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
