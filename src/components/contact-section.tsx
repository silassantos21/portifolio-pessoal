import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SITE_CONFIG } from "@/config/site";

const CONTACT_LINKS = [
  {
    href: `mailto:${SITE_CONFIG.email}`,
    label: SITE_CONFIG.email,
    icon: Mail,
  },
  {
    href: `tel:${SITE_CONFIG.phone}`,
    label: SITE_CONFIG.phoneDisplay,
    icon: Phone,
  },
  {
    href: SITE_CONFIG.github,
    label: "github.com/silassantos21",
    icon: FaGithub,
  },
  {
    href: SITE_CONFIG.linkedin,
    label: "linkedin.com/in/silas-santos",
    icon: FaLinkedin,
  },
] as const;

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{t("subtitle")}</p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {CONTACT_LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-3 text-sm transition-colors hover:border-primary/40"
          >
            <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
