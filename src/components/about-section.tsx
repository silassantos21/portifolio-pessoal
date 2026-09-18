"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function AboutSection() {
  const t = useTranslations("About");

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
          className="mx-auto flex size-40 items-center justify-center rounded-full bg-secondary text-secondary-foreground md:mx-0"
        >
          <User className="size-16" aria-hidden="true" />
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-foreground/90">
            {t("bio")}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              aria-label={t("socialLinks.github")}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href="#"
              aria-label={t("socialLinks.linkedin")}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaLinkedin className="size-5" />
            </a>
            <a
              href="#"
              aria-label={t("socialLinks.email")}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <HiOutlineMail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
