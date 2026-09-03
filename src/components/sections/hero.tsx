import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { LiveClock } from "@/components/ui/live-clock";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="pt-2 sm:pt-4">
      <Container>
        <Panel className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="flex flex-col gap-6">
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
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

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              <div className="flex flex-col gap-2 rounded-[1.5rem] bg-panel-alt p-5">
                <p className="text-sm font-semibold">Часы работы</p>
                <div className="flex flex-col gap-1 text-sm text-ink-muted">
                  <div className="flex justify-between gap-4">
                    <span>Пн – Пт</span>
                    <span>{siteConfig.workHoursWeekdays}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Сб, Вс</span>
                    <span>{siteConfig.workHoursWeekend}</span>
                  </div>
                </div>
                <LiveClock />
              </div>

              <Link
                href="/#booking"
                className="group relative flex min-h-[10rem] flex-col justify-between rounded-[1.5rem] bg-accent p-5 transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-panel text-ink transition-transform group-hover:rotate-45">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
                <span className="font-display text-lg font-bold leading-snug">
                  Записаться на приём
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <PhotoPlaceholder
              label="врач в кабинете с пациентом, светлый тёплый кадр"
              className="aspect-[4/5] w-full rounded-[1.5rem]"
              rounded="rounded-[1.5rem]"
            />
          </Reveal>
        </Panel>
      </Container>
    </section>
  );
}
