"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
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

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ui text-base text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href="/#booking" size="lg">
            Записаться
          </LinkButton>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Открыть меню"
          aria-expanded={open}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5 19 19M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="md:hidden">
          <Container className="flex flex-col gap-1 rounded-[1.5rem] bg-panel p-4 pb-6 shadow-lg shadow-ink/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-ui text-base text-ink-muted hover:bg-panel-alt hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <LinkButton href="/#booking" size="lg" className="mt-2 justify-center" onClick={() => setOpen(false)}>
              Записаться
            </LinkButton>
          </Container>
        </div>
      )}
    </header>
  );
}
