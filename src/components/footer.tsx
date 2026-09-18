import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function Footer() {
  const t = useTranslations("Footer");
  const tSocial = useTranslations("About.socialLinks");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {year} — {t("rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label={tSocial("github")}
            className="transition-colors hover:text-foreground"
          >
            <FaGithub className="size-5" />
          </a>
          <a
            href="#"
            aria-label={tSocial("linkedin")}
            className="transition-colors hover:text-foreground"
          >
            <FaLinkedin className="size-5" />
          </a>
          <a
            href="#"
            aria-label={tSocial("email")}
            className="transition-colors hover:text-foreground"
          >
            <HiOutlineMail className="size-5" />
          </a>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-muted-foreground">
        {t("builtWith")}
      </p>
    </footer>
  );
}
