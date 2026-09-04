import Link from "next/link";
import { BookingTrigger } from "@/components/ui/booking-trigger";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { pricing } from "@/lib/site-data";

export function PricingCatalog() {
  return (
    <Panel className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
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
          На главную
        </Link>
        <Eyebrow>Цены</Eyebrow>
        <h1 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Прозрачный прайс без сюрпризов
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-ink-muted">
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
            <h2 className="mb-3 font-display text-lg font-bold">{category.category}</h2>
            <ul className="flex flex-col divide-y divide-ink/8">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
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
  );
}
