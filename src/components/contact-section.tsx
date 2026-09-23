import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SectionHeading } from "@/components/section-heading";
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
  const tNav = useTranslations("Nav");

  return (
    <section
      id="contact"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <SectionHeading
        eyebrow={`06 — ${tNav("contact")}`}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {CONTACT_LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card-glow flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-3 text-sm"
          >
            <Icon className="size-4 text-primary" aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
