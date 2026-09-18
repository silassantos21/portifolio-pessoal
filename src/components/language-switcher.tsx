"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(nextLocale: (typeof LOCALES)[number]["code"]) {
    try {
      window.localStorage.setItem("preferred-locale", nextLocale);
    } catch {
      // localStorage pode estar indisponível (modo privado, etc.)
    }
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Idioma">
      {LOCALES.map(({ code, flag, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleChange(code)}
          aria-pressed={locale === code}
          aria-label={label}
          title={label}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md text-lg transition-opacity hover:opacity-100",
            locale === code ? "opacity-100 ring-1 ring-ring" : "opacity-50"
          )}
        >
          <span aria-hidden="true">{flag}</span>
        </button>
      ))}
    </div>
  );
}
