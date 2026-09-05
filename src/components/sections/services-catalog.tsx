"use client";

import { useState } from "react";
import Link from "next/link";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/service-card";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { serviceCategoryLabels, services, type ServiceCategory } from "@/lib/site-data";

export function ServicesCatalog() {
  const [active, setActive] = useState<ServiceCategory | "all">("all");
  const { d, tr } = useT();
  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  const tabs: { key: ServiceCategory | "all"; label: string }[] = [
    { key: "all", label: tr(d.common.allServices) },
    ...(Object.entries(serviceCategoryLabels) as [ServiceCategory, (typeof serviceCategoryLabels)[ServiceCategory]][]).map(
      ([key, label]) => ({ key, label: tr(label) }),
    ),
  ];

  return (
    <Panel className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 font-ui text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {tr(d.common.backHome)}
        </Link>
        <Eyebrow>{tr(d.serviceCatalog.eyebrow)}</Eyebrow>
        <h1 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {tr(d.serviceCatalog.heading)}
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-ink-muted">
          {tr(d.serviceCatalog.description)}
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
