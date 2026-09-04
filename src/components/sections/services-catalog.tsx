"use client";

import { useState } from "react";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/service-card";
import { cn } from "@/lib/cn";
import { serviceCategoryLabels, services, type ServiceCategory } from "@/lib/site-data";

const tabs: { key: ServiceCategory | "all"; label: string }[] = [
  { key: "all", label: "Все услуги" },
  ...(Object.entries(serviceCategoryLabels) as [ServiceCategory, string][]).map(
    ([key, label]) => ({ key, label }),
  ),
];

export function ServicesCatalog() {
  const [active, setActive] = useState<ServiceCategory | "all">("all");
  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <Panel className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <Eyebrow>Каталог услуг</Eyebrow>
        <h1 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Стоматологические услуги для всей семьи
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-ink-muted">
          От профилактики до сложной имплантации — полный цикл лечения под одной крышей.
          Точную стоимость и план лечения врач определит на консультации.
        </p>

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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 6) * 0.05} className="min-w-0">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
