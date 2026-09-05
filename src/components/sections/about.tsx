"use client";

import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { serviceIcons } from "@/components/icons";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { features, siteConfig } from "@/lib/site-data";

export function About() {
  const { d, tr } = useT();

  return (
    <section id="about" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <Eyebrow>{tr(d.about.eyebrow)}</Eyebrow>
            <div className="grid gap-6 lg:grid-cols-2">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {tr(d.about.heading)} {siteConfig.shortName}
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-ink-muted">
                {tr(d.about.body)}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = serviceIcons[feature.icon];
              return (
                <Reveal
                  key={feature.title.ru}
                  delay={i * 0.06}
                  className={cn(
                    "flex h-full flex-col gap-4 rounded-[1.5rem] p-6",
                    feature.highlighted ? "bg-accent" : "bg-panel-alt",
                  )}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-panel">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-base font-bold leading-snug">
                      {tr(feature.title)}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {tr(feature.description)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
