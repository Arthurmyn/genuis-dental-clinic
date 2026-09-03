import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Почему мы"
          title="Цифры вместо обещаний"
          description="Мы измеряем результат так же тщательно, как планируем лечение."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-surface p-8">
              <p className="font-display text-4xl font-semibold tracking-tight text-accent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
