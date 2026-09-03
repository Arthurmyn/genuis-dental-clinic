import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/site-data";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "WhatsApp", href: siteConfig.social.whatsapp },
  { label: "Telegram", href: siteConfig.social.telegram },
  { label: "VK", href: siteConfig.social.vk },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-cream-dark/60">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex max-w-xs flex-col gap-3">
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-cream">
                G
              </span>
              {siteConfig.shortName}
            </a>
            <p className="text-sm text-ink-muted">{siteConfig.tagline}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">Навигация</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-muted hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">Контакты</p>
            <a href={siteConfig.phoneHref} className="text-sm text-ink-muted hover:text-accent">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink-muted hover:text-accent">
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
                  className="text-sm text-ink-muted hover:text-accent"
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
      </Container>
    </footer>
  );
}
