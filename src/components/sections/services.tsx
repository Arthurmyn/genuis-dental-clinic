import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { serviceIcons } from "@/components/icons";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Услуги"
          title="Всё, что нужно вашей улыбке"
          description="От профилактики до сложной имплантации — полный цикл лечения под одной крышей."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.06}>
                <div className="group flex h-full flex-col gap-4 rounded-md border border-ink/8 bg-surface p-6 transition-colors hover:border-accent/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-cream">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                  </div>
                  <p className="mt-auto pt-2 text-sm font-semibold text-accent">
                    от {service.priceFrom.toLocaleString("ru-RU")} ₽
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
