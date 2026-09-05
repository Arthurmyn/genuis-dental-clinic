"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { useT } from "@/lib/i18n";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
  const { d, tr } = useT();

  const socialLinks = [
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "WhatsApp", href: siteConfig.social.whatsapp },
    { label: "Telegram", href: siteConfig.social.telegram },
    { label: "2ГИС", href: siteConfig.twoGisFirmUrl },
    { label: "Google Профиль", href: siteConfig.googleBusinessUrl }, // TODO: подставить ссылку на Google Business
  ];

  return (
    <footer className="py-6">
      <Container>
        <Panel className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
            <div className="flex max-w-xs flex-col gap-3">
              <Link href="/">
                <Image
                  src="/photos/genius-logo.jpg"
                  alt={siteConfig.name}
                  width={160}
                  height={160}
                  className="h-24 w-24 object-contain"
                />
              </Link>
              <p className="text-sm text-ink-muted">{tr(siteConfig.tagline)}</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">{tr(d.footer.nav)}</p>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-ui text-sm text-ink-muted hover:text-ink"
                  >
                    {tr(link.label)}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">{tr(d.footer.contacts)}</p>
              <a
                href={siteConfig.phoneHref}
                className="font-numeric text-sm text-ink-muted hover:text-ink"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.phoneSecondaryHref}
                className="font-numeric text-sm text-ink-muted hover:text-ink"
              >
                {siteConfig.phoneSecondary}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink-muted hover:text-ink">
                {siteConfig.email}
              </a>
              <p className="text-sm text-ink-muted">{tr(siteConfig.address)}</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">{tr(d.footer.social)}</p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-ui text-sm text-ink-muted hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-ink/8 pt-6 text-xs text-ink-muted">
            <p>{siteConfig.license}</p>
            <p>{siteConfig.requisites}</p>
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. {tr(d.footer.rightsReserved)}
            </p>
            <p>
              {tr(d.footer.credit)}{" "}
              <a href="mailto:dzartur34@gmail.com" className="font-semibold text-ink hover:underline">
                Артур Джаксыгалиев
              </a>
            </p>
          </div>
        </Panel>
      </Container>
    </footer>
  );
}
