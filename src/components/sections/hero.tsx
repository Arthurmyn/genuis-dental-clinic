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
    <section id="top" className="flex min-h-[calc(100vh-4.5rem)] flex-col py-3">
      <Container padding="narrow" className="flex flex-1">
        <Panel padding="tight" className="flex flex-1">
          <div className="grid flex-1 gap-8 lg:grid-cols-2">
            <Reveal className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-5">
                <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[3.75rem]">
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
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex h-full flex-col gap-3">
                  <div className="flex flex-1 flex-col gap-3 rounded-[1.5rem] bg-panel-alt p-5">
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

            <Reveal delay={0.1} className="aspect-[4/5] lg:aspect-auto lg:h-full">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/photos/man-hero.jpg"
                  alt="Пациент клиники со здоровой улыбкой"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
