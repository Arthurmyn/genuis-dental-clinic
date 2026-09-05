"use client";

import Link from "next/link";
import { BookingTrigger } from "@/components/ui/booking-trigger";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { formatPrice, minPriceOf } from "@/lib/format-price";
import { pricing } from "@/lib/site-data";

export function PricingCatalog() {
  const { lang, d, tr } = useT();

  return (
    <Panel padding="tight" className="flex flex-col gap-10 sm:gap-12">
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

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="flex flex-col gap-5">
          <Eyebrow className="w-fit">{tr(d.pricing.eyebrow)}</Eyebrow>
          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            {d.pricing.heading[lang].map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>
        </div>
        <div className="flex flex-col gap-5 lg:items-start">
          <p className="max-w-sm text-base leading-relaxed text-ink-muted">
            {tr(d.pricing.description)}
          </p>
          <BookingTrigger className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-ui text-base font-bold text-panel transition-colors hover:bg-ink/85">
            {tr(d.pricing.consult)}
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </BookingTrigger>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {pricing.map((category, i) => {
          const minPrice = minPriceOf(category.items);
          const wide = i === 0 || i === 3;

          return (
            <Reveal
              key={category.category.ru}
              delay={i * 0.06}
              className={cn(category.highlighted ? "lg:col-span-3" : wide && "lg:col-span-2")}
            >
              <div
                className={cn(
                  "flex h-full flex-col gap-6 rounded-[1.75rem] p-8",
                  category.highlighted ? "bg-accent" : "bg-panel-alt",
                  category.highlighted && "lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-xl font-bold sm:text-2xl">
                    {tr(category.category)}
                  </h2>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      {tr(d.common.from)}
                    </p>
                    <p className="font-numeric text-3xl font-extrabold leading-none sm:text-4xl">
                      {minPrice.toLocaleString("ru-RU")} ₸
                    </p>
                  </div>
                </div>

                <ul
                  className={cn(
                    "flex flex-col divide-y divide-ink/10",
                    category.highlighted && "lg:col-span-2 lg:grid lg:grid-cols-2 lg:divide-y-0 lg:gap-x-10",
                  )}
                >
                  {category.items.map((item) => (
                    <li
                      key={item.name.ru}
                      className={cn(
                        "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3",
                        category.highlighted && "lg:border-b lg:border-ink/10",
                      )}
                    >
                      <span className="text-sm text-ink-muted">{tr(item.name)}</span>
                      <span className="whitespace-nowrap font-numeric text-base font-bold">
                        {formatPrice(item, lang)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Panel>
  );
}
