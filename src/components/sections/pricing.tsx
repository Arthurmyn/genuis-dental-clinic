import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LinkButton } from "@/components/ui/button";
import { pricing } from "@/lib/site-data";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Цены"
          title="Прозрачный прайс без сюрпризов"
          description="Точную стоимость лечения определяет врач на консультации после диагностики."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {pricing.map((category, i) => (
            <Reveal
              key={category.category}
              delay={i * 0.06}
              className="flex flex-col gap-1 rounded-md border border-ink/8 bg-surface p-6 sm:p-8"
            >
              <h3 className="mb-3 font-display text-lg font-semibold">
                {category.category}
              </h3>
              <ul className="flex flex-col divide-y divide-ink/8">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="text-sm text-ink-muted">{item.name}</span>
                    <span className="whitespace-nowrap font-medium">
                      {item.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-sm text-ink-muted">
          Полный прайс-лист можно уточнить у администратора клиники.{" "}
          <LinkButton href="#booking" variant="ghost" className="px-1 py-0 underline underline-offset-4">
            Записаться на консультацию
          </LinkButton>
        </p>
      </Container>
    </section>
  );
}
