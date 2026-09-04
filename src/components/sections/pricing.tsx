import { BookingTrigger } from "@/components/ui/booking-trigger";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { pricing } from "@/lib/site-data";

export function Pricing() {
  return (
    <section id="pricing" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>Цены</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Прозрачный прайс без сюрпризов
            </h2>
            <p className="max-w-lg text-sm text-ink-muted">
              Точную стоимость лечения определяет врач на консультации после диагностики.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {pricing.map((category, i) => (
              <Reveal
                key={category.category}
                delay={i * 0.06}
                className="flex flex-col gap-1 rounded-[1.5rem] bg-panel-alt p-6 sm:p-8"
              >
                <h3 className="mb-3 font-display text-lg font-bold">{category.category}</h3>
                <ul className="flex flex-col divide-y divide-ink/8">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <span className="text-sm text-ink-muted">{item.name}</span>
                      <span className="whitespace-nowrap font-numeric text-lg font-bold sm:text-xl">
                        {item.price.toLocaleString("ru-RU")} ₸
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <p className="text-center text-sm text-ink-muted">
            Полный прайс-лист можно уточнить у администратора клиники.{" "}
            <BookingTrigger className="font-semibold text-ink underline underline-offset-4">
              Записаться на консультацию
            </BookingTrigger>
          </p>
        </Panel>
      </Container>
    </section>
  );
}
