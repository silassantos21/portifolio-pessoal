import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{t("subtitle")}</p>
    </section>
  );
}
