"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { LiveClock } from "@/components/ui/live-clock";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon, ToothIcon } from "@/components/icons";
import { useT } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  const { lang, d, tr } = useT();

  return (
    <section id="top" className="flex min-h-[calc(100vh-4.5rem)] flex-col py-3">
      <Container padding="narrow" className="flex flex-1">
        <Panel padding="tight" className="flex flex-1">
          <div className="grid flex-1 gap-8 lg:grid-cols-2">
            <Reveal className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-panel px-4 py-1.5 font-ui text-xs font-bold uppercase tracking-wide text-ink">
                  <ToothIcon className="h-4 w-4" />
                  {tr(d.hero.badge)}
                </span>
                <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[3.75rem]">
                  {d.hero.heading[lang].map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
                <p className="max-w-md text-base leading-relaxed text-ink-muted">
                  {tr(d.hero.description)}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex h-full flex-col gap-3">
                  <div className="flex flex-1 flex-col gap-3 rounded-[1.5rem] bg-panel-alt p-5">
                    <p className="text-sm font-semibold">{tr(d.hero.workHours)}</p>
                    <div className="flex flex-col gap-1.5 text-sm text-ink-muted">
                      <div className="flex justify-between gap-4">
                        <span>{tr(d.hero.weekdays)}</span>
                        <span>{siteConfig.workHoursWeekdays}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>{tr(d.hero.weekend)}</span>
                        <span>{siteConfig.workHoursWeekend}</span>
                      </div>
                    </div>
                  </div>
                  <LiveClock />
                </div>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full min-h-[10rem] w-full flex-col items-start justify-between rounded-[1.5rem] bg-accent p-5 text-left transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-panel text-ink transition-transform group-hover:rotate-45">
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-xl font-bold leading-snug">
                    {tr(d.hero.bookCard)}
                  </span>
                </a>
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
