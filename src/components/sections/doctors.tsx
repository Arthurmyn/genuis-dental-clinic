"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { doctorCategoryLabels, doctors, type DoctorCategory } from "@/lib/site-data";

const presentCategories = new Set(doctors.map((d) => d.category));

export function Doctors() {
  const [active, setActive] = useState<DoctorCategory | "all">("all");
  const { d, tr } = useT();
  const filtered = active === "all" ? doctors : doctors.filter((doc) => doc.category === active);
  const rowRef = useRef<HTMLDivElement>(null);

  const tabs: { key: DoctorCategory | "all"; label: string }[] = [
    { key: "all", label: tr(d.doctors.all) },
    ...(Object.entries(doctorCategoryLabels) as [DoctorCategory, (typeof doctorCategoryLabels)[DoctorCategory]][])
      .filter(([key]) => presentCategories.has(key))
      .map(([key, label]) => ({ key, label: tr(label) })),
  ];

  function scrollCards(direction: -1 | 1) {
    const row = rowRef.current;
    if (!row) return;

    row.scrollBy({ left: direction * row.clientWidth * 0.9, behavior: "smooth" });
  }

  function selectCategory(category: DoctorCategory | "all") {
    setActive(category);
    rowRef.current?.scrollTo({ left: 0 });
  }

  return (
    <section id="doctors" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-8">
          <Eyebrow className="w-fit">{tr(d.doctors.eyebrow)}</Eyebrow>

          <div className="flex flex-col gap-6">
            <h2 className="max-w-xs font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              {tr(d.doctors.heading)}
            </h2>

            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => selectCategory(tab.key)}
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
              className="no-scrollbar -mx-6 flex min-w-0 gap-4 overflow-x-auto px-6 pb-2 sm:-mx-10 sm:px-10 lg:mx-14 lg:overflow-x-hidden lg:px-0 lg:pb-0"
            >
              {filtered.map((doctor, i) => (
                <div
                  key={doctor.name + i}
                  className="w-[230px] shrink-0 sm:w-[260px] lg:w-[calc((100%_-_2rem)/3)]"
                >
                  <div className="flex flex-col gap-4">
                    <PhotoPlaceholder
                      src={doctor.photo}
                      label={`${doctor.name}, ${tr(doctor.role).toLowerCase()}`}
                      className="aspect-[3/4] w-full rounded-[1.25rem]"
                      rounded="rounded-[1.25rem]"
                    />
                    <div>
                      <h3 className="font-display text-base font-bold">{doctor.name}</h3>
                      <p className="text-sm text-ink-muted">{tr(doctor.role)}</p>
                      <p className="mt-1 text-xs font-semibold text-ink-muted">
                        {tr(d.common.experience)}{" "}
                        <span className="font-numeric">{doctor.experienceYears}</span> {tr(d.common.years)}
                      </p>
                    </div>
                  </div>
                </div>
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
