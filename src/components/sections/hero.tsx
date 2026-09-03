import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { RotatingBadge } from "@/components/ui/rotating-badge";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { PhoneIcon, StarIcon } from "@/components/icons";
import { avatarCount, siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="pt-6 sm:pt-10">
      <Container>
        <div className="relative grid gap-10 overflow-hidden rounded-xl bg-accent-soft/70 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>{siteConfig.tagline}</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Здоровая улыбка
              <br />
              начинается с
              <br />
              заботливой команды
            </h1>
            <p className="max-w-md text-base leading-relaxed text-ink-muted">
              Диагностика, лечение и эстетическая стоматология в одной клинике.
              Современное оборудование, прозрачные цены и врачи, которым доверяют.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <LinkButton href="#booking">Записаться на приём</LinkButton>
              <LinkButton href={siteConfig.phoneHref} variant="outline">
                <PhoneIcon className="h-4 w-4" />
                {siteConfig.phone}
              </LinkButton>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <AvatarStack />
              <p className="text-sm text-ink-muted">
                <span className="font-semibold text-ink">{avatarCount}</span> пациентов
                уже улыбаются увереннее
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <PhotoPlaceholder
              label="врач в кабинете с пациентом, светлый тёплый кадр"
              className="aspect-[4/5] w-full rounded-lg"
              rounded="rounded-lg"
            />

            <div className="absolute -left-4 bottom-6 flex items-center gap-3 rounded-md bg-surface p-4 shadow-xl shadow-ink/5 sm:-left-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-cream">
                <StarIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-none">4.9 / 5</p>
                <p className="text-xs text-ink-muted">по отзывам пациентов</p>
              </div>
            </div>

            <div className="absolute -right-3 -top-3 sm:-right-6 sm:-top-6">
              <RotatingBadge />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
