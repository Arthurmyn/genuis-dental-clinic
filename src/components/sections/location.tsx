import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ClockIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-data";

export function Location() {
  return (
    <section id="contacts" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Контакты" title="Как нас найти" />

        <div className="grid gap-6 overflow-hidden rounded-lg border border-ink/8 bg-surface lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="h-80 lg:h-auto">
            {/* TODO: заменить mapEmbedSrc в src/lib/site-data.ts на точный адрес клиники */}
            <iframe
              src={siteConfig.mapEmbedSrc}
              title="Карта расположения клиники"
              loading="lazy"
              className="h-full w-full grayscale-[15%]"
              style={{ border: 0 }}
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center gap-6 p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Адрес</p>
                <p className="text-sm text-ink-muted">{siteConfig.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Часы работы</p>
                <p className="text-sm text-ink-muted">{siteConfig.workHours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Телефон</p>
                <a href={siteConfig.phoneHref} className="text-sm text-ink-muted hover:text-accent">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
