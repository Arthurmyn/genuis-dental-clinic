import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-data";

export function Location() {
  return (
    <section id="contacts" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <Eyebrow>Контакты</Eyebrow>

          <div className="grid gap-6 overflow-hidden rounded-[1.5rem] bg-panel-alt lg:grid-cols-[1.1fr_1fr]">
            <Reveal className="h-80 lg:h-auto">
              <iframe
                src={siteConfig.mapEmbedSrc}
                title="Карта расположения клиники Genius на 2ГИС"
                loading="lazy"
                className="h-full w-full grayscale-[15%]"
                style={{ border: 0 }}
              />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col justify-center gap-6 p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panel text-ink">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Адрес</p>
                  <p className="text-sm text-ink-muted">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panel text-ink">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Часы работы</p>
                  <p className="text-sm text-ink-muted">
                    Пн – Пт: {siteConfig.workHoursWeekdays} · Сб, Вс: {siteConfig.workHoursWeekend}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panel text-ink">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Телефон</p>
                  <a
                    href={siteConfig.phoneHref}
                    className="font-numeric text-sm text-ink-muted hover:text-ink"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={siteConfig.twoGisRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-ui text-sm font-bold text-panel transition-colors hover:bg-ink/85"
                >
                  Построить маршрут в 2ГИС
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
                <a
                  href={siteConfig.twoGisFirmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-ink underline underline-offset-4"
                >
                  Профиль на 2ГИС
                </a>
              </div>
            </Reveal>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
