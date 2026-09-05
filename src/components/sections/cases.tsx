"use client";

import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { useT } from "@/lib/i18n";
import { cases } from "@/lib/site-data";

export function Cases() {
  const { d, tr } = useT();

  return (
    <section className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>{tr(d.cases.eyebrow)}</Eyebrow>
            <h2 className="max-w-lg font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              {tr(d.cases.heading)}
            </h2>
            <p className="max-w-lg text-sm text-ink-muted">{tr(d.cases.description)}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, i) => (
              <Reveal key={item.title.ru} delay={i * 0.08} className="flex flex-col gap-3">
                <BeforeAfterSlider
                  before={item.before}
                  after={item.after}
                  beforeAlt={`До: ${tr(item.title)}`}
                  afterAlt={`После: ${tr(item.title)}`}
                  beforeLabel={tr(d.cases.before)}
                  afterLabel={tr(d.cases.after)}
                />
                <div>
                  <h3 className="font-display text-base font-bold">{tr(item.title)}</h3>
                  <p className="text-sm text-ink-muted">{tr(item.note)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
