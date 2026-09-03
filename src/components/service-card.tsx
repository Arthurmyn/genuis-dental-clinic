import Link from "next/link";
import { serviceIcons, CheckIcon, ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service, badgeClassName }: { service: Service; badgeClassName?: string }) {
  const Icon = serviceIcons[service.icon];

  return (
    <div className="flex h-full min-w-0 flex-col gap-5 rounded-[1.5rem] bg-panel-alt p-6">
      <span
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-2xl bg-panel text-ink",
          badgeClassName,
        )}
      >
        <Icon className="h-6 w-6" />
      </span>

      <div className="flex flex-col gap-1.5">
        <h3 className="break-words font-display text-lg font-bold leading-snug">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
      </div>

      <ul className="flex flex-col gap-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
            <CheckIcon className="h-4 w-4 shrink-0 text-ink" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        <span className="text-sm font-semibold">
          от {service.priceFrom.toLocaleString("ru-RU")} ₽
        </span>
        <Link
          href="/#booking"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-panel transition-colors hover:bg-ink/85"
        >
          Записаться
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
        </Link>
      </div>
    </div>
  );
}
