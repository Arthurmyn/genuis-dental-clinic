"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { useT } from "@/lib/i18n";
import { formatPrice } from "@/lib/format-price";
import { pricing } from "@/lib/site-data";

export function Pricing() {
  const featured = pricing.slice(0, 2);
  const { lang, d, tr } = useT();

  return (
    <section id="pricing" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4">
              <Eyebrow>{tr(d.pricing.eyebrow)}</Eyebrow>
              <h2 className="max-w-md font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {d.pricing.heading[lang].join(" ")}
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:max-w-xs">
              <p className="text-sm leading-relaxed text-ink-muted">{tr(d.pricing.description)}</p>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center self-start rounded-full bg-ink px-12 py-2.5 font-ui text-base font-bold text-panel transition-colors hover:bg-ink/85"
              >
                {tr(d.common.allPricing)}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {featured.map((category, i) => (
              <Reveal
                key={category.category.ru}
                delay={i * 0.06}
                className="flex flex-col gap-1 rounded-[1.5rem] bg-panel-alt p-6 sm:p-8"
              >
                <h3 className="mb-3 font-display text-lg font-bold">{tr(category.category)}</h3>
                <ul className="flex flex-col divide-y divide-ink/8">
                  {category.items.map((item) => (
                    <li
                      key={item.name.ru}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
                    >
                      <span className="text-sm text-ink-muted">{tr(item.name)}</span>
                      <span className="whitespace-nowrap font-numeric text-lg font-bold sm:text-xl">
                        {formatPrice(item, lang)}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
