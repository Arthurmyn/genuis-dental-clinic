"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { cn } from "@/lib/cn";
import { doctorCategoryLabels, doctors, type DoctorCategory } from "@/lib/site-data";

const presentCategories = new Set(doctors.map((d) => d.category));

const tabs: { key: DoctorCategory | "all"; label: string }[] = [
  { key: "all", label: "Все врачи" },
  ...(Object.entries(doctorCategoryLabels) as [DoctorCategory, string][])
    .filter(([key]) => presentCategories.has(key))
    .map(([key, label]) => ({ key, label })),
];

export function Doctors() {
  const [active, setActive] = useState<DoctorCategory | "all">("all");
  const filtered = active === "all" ? doctors : doctors.filter((d) => d.category === active);
  const rowRef = useRef<HTMLDivElement>(null);

  function scrollCards(direction: -1 | 1) {
    const row = rowRef.current;
    if (!row) return;

    row.scrollBy({ left: direction * row.clientWidth * 0.9, behavior: "smooth" });
  }

  return (
    <section id="doctors" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-8">
          <Eyebrow className="w-fit">Наша команда</Eyebrow>

          <div className="flex flex-col gap-6">
            <h2 className="max-w-xs font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Врачи, которым доверяют
            </h2>

            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    "rounded-full px-4 py-2 font-ui text-sm font-bold transition-colors",
                    active === tab.key
                      ? "bg-ink text-panel"
                      : "bg-panel-alt text-ink-muted hover:text-ink",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <button
              type="button"
              onClick={() => scrollCards(-1)}
              aria-label="Показать предыдущих врачей"
              className="absolute left-0 top-[calc(50%-1.5rem)] z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-ink text-panel shadow-lg shadow-ink/15 transition-colors hover:bg-ink/85 lg:flex"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div
              ref={rowRef}
              className="no-scrollbar -mx-6 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 scroll-pl-6 sm:-mx-10 sm:px-10 sm:scroll-pl-10 lg:mx-14 lg:px-0 lg:pb-0 lg:scroll-pl-0"
            >
              {filtered.map((doctor, i) => (
                <Reveal
                  key={doctor.name + i}
                  delay={i * 0.06}
                  className="w-[230px] shrink-0 snap-start sm:w-[260px] lg:w-[calc((100%_-_2rem)/3)]"
                >
                  <div className="flex flex-col gap-4">
                    <PhotoPlaceholder
                      src={doctor.photo}
                      label={`${doctor.name}, ${doctor.role.toLowerCase()}`}
                      className="aspect-[3/4] w-full rounded-[1.25rem]"
                      rounded="rounded-[1.25rem]"
                    />
                    <div>
                      <h3 className="font-display text-base font-bold">{doctor.name}</h3>
                      <p className="text-sm text-ink-muted">{doctor.role}</p>
                      <p className="mt-1 text-xs font-semibold text-ink-muted">
                        Опыт <span className="font-numeric">{doctor.experienceYears}</span> лет
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollCards(1)}
              aria-label="Показать следующих врачей"
              className="absolute right-0 top-[calc(50%-1.5rem)] z-10 hidden h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-ink text-panel shadow-lg shadow-ink/15 transition-colors hover:bg-ink/85 lg:flex"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
