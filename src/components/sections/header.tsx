"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { PhoneIcon } from "@/components/icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useT, useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center rounded-full bg-panel-alt p-1 font-ui text-xs font-bold">
      {(["ru", "kk"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={cn(
            "rounded-full px-2.5 py-1.5 uppercase transition-colors",
            lang === code ? "bg-ink text-panel" : "text-ink-muted hover:text-ink",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { d, tr } = useT();
  const waUrl = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-numeric text-lg font-bold">
          <Image
            src="/photos/genius-icon.png"
            alt=""
            width={40}
            height={34}
            className="h-8 w-auto"
            priority
          />
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-11">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ui text-lg text-ink-muted transition-colors hover:text-ink"
            >
              {tr(link.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitch />
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 font-numeric text-base font-semibold text-ink transition-colors hover:text-ink/70 xl:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <LinkButton href={waUrl} target="_blank" rel="noopener noreferrer" size="lg">
            {tr(d.header.book)}
          </LinkButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10"
            onClick={() => setOpen((o) => !o)}
            aria-label={tr(d.header.openMenu)}
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M5 5 19 19M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden">
          <Container className="flex flex-col gap-1 rounded-[1.5rem] bg-panel p-4 pb-6 shadow-lg shadow-ink/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-ui text-lg text-ink-muted hover:bg-panel-alt hover:text-ink"
              >
                {tr(link.label)}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-2 py-3 font-numeric text-lg font-semibold text-ink hover:bg-panel-alt"
            >
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <LinkButton
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="mt-2 justify-center"
              onClick={() => setOpen(false)}
            >
              {tr(d.header.book)}
            </LinkButton>
          </Container>
        </div>
      )}
    </header>
  );
}
