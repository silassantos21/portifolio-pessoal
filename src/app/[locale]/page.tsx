import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const t = useTranslations("Hero");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        {t("greeting")}
      </p>
      <h1 className="text-4xl font-bold sm:text-6xl">{t("name")}</h1>
      <p className="text-lg text-muted-foreground">{t("role")}</p>
      <p className="max-w-xl text-muted-foreground">{t("tagline")}</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="#contact">{t("ctaContact")}</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#projects">{t("ctaProjects")}</Link>
        </Button>
      </div>
    </main>
  );
}
