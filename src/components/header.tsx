"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  "about",
  "projects",
  "skills",
  "experience",
  "education",
  "contact",
] as const;

export function Header() {
  const t = useTranslations("Nav");
  const tHero = useTranslations("Hero");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight transition-colors hover:text-primary"
        >
          {tHero("name")}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t(item)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/40 px-4 pb-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground hover:text-primary"
            >
              {t(item)}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
