"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { cn } from "@/lib/cn";
import { doctorCategoryLabels, doctors, type DoctorCategory } from "@/lib/site-data";

const tabs: { key: DoctorCategory | "all"; label: string }[] = [
  { key: "all", label: "Все врачи" },
  ...(Object.entries(doctorCategoryLabels) as [DoctorCategory, string][]).map(([key, label]) => ({
    key,
    label,
  })),
];

export function Doctors() {
  const [active, setActive] = useState<DoctorCategory | "all">("all");
  const filtered = active === "all" ? doctors : doctors.filter((d) => d.category === active);

  return (
    <section id="doctors" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Eyebrow>Врачи</Eyebrow>
              <h2 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Врачи, которым доверяют
              </h2>
            </div>

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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((doctor, i) => (
              <Reveal key={doctor.name + i} delay={i * 0.06} className="flex flex-col gap-4">
                <PhotoPlaceholder
                  label={`портрет врача — ${doctor.role.toLowerCase()}`}
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
              </Reveal>
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
