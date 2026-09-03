import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { LiveClock } from "@/components/ui/live-clock";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="pt-2 sm:pt-3">
      <Container>
        <Panel padding="tight" className="grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5">
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3rem]">
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

            <div className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2">
              <div className="flex h-full flex-col gap-3 rounded-[1.5rem] bg-panel-alt p-5">
                <p className="text-sm font-semibold">Часы работы</p>
                <div className="flex flex-col gap-1.5 text-sm text-ink-muted">
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
                className="group relative flex h-full min-h-[10rem] flex-col justify-between rounded-[1.5rem] bg-accent p-5 transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-panel text-ink transition-transform group-hover:rotate-45">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </span>
                <span className="font-display text-xl font-bold leading-snug">
                  Записаться на приём
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-h-[22rem]">
            <div className="relative h-full min-h-[22rem] w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src="/photos/woman-hero.jpg"
                alt="Пациентка клиники со здоровой улыбкой"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Panel>
      </Container>
    </section>
  );
}
