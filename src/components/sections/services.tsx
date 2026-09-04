import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export function Services() {
  const featured = services.slice(0, 4);

  return (
    <section id="services" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4">
              <Eyebrow>Услуги</Eyebrow>
              <h2 className="max-w-md font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Стоматологические услуги на любой случай
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:max-w-xs">
              <p className="text-sm leading-relaxed text-ink-muted">
                От профилактики до сложной имплантации — полный цикл лечения под одной крышей.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center self-start rounded-full bg-ink px-8 py-4 font-ui text-base font-bold text-panel transition-colors hover:bg-ink/85"
              >
                Все услуги
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 0.06} className="min-w-0">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
