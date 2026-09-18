import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const SECTIONS = [
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Education",
] as const;

function PlaceholderSection({
  namespace,
}: {
  namespace: (typeof SECTIONS)[number];
}) {
  const t = useTranslations(namespace);

  return (
    <section
      id={namespace.toLowerCase()}
      className="container scroll-mt-24 border-t border-border/40 py-24"
    >
      <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{t("subtitle")}</p>
    </section>
  );
}

export default function HomePage() {
  const t = useTranslations("Hero");
  const tContact = useTranslations("Contact");

  return (
    <main>
      <section className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center gap-6 p-8 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          {t("greeting")}
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl">{t("name")}</h1>
        <p className="text-lg text-muted-foreground">{t("role")}</p>
        <p className="max-w-xl text-muted-foreground">{t("tagline")}</p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#contact">{t("ctaContact")}</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">{t("ctaProjects")}</a>
          </Button>
        </div>
      </section>

      {SECTIONS.map((namespace) => (
        <PlaceholderSection key={namespace} namespace={namespace} />
      ))}

      <section
        id="contact"
        className="container scroll-mt-24 border-t border-border/40 py-24"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          {tContact("title")}
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {tContact("subtitle")}
        </p>
      </section>
    </main>
  );
}
