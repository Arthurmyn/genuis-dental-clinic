import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { ToothIcon } from "@/components/icons";
import { navLinks, siteConfig } from "@/lib/site-data";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "WhatsApp", href: siteConfig.social.whatsapp },
  { label: "Telegram", href: siteConfig.social.telegram },
  { label: "VK", href: siteConfig.social.vk },
];

export function Footer() {
  return (
    <footer className="py-6">
      <Container>
        <Panel className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
            <div className="flex max-w-xs flex-col gap-3">
              <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-panel">
                  <ToothIcon className="h-4 w-4" />
                </span>
                {siteConfig.shortName}
              </Link>
              <p className="text-sm text-ink-muted">{siteConfig.tagline}</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">Навигация</p>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">Контакты</p>
              <a href={siteConfig.phoneHref} className="text-sm text-ink-muted hover:text-ink">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink-muted hover:text-ink">
                {siteConfig.email}
              </a>
              <p className="text-sm text-ink-muted">{siteConfig.address}</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">Мы в соцсетях</p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-ink"
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
              © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
            </p>
          </div>
        </Panel>
      </Container>
    </footer>
  );
}
