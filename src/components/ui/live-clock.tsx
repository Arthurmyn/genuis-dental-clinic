"use client";

import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";

const WEEKDAYS: Record<"ru" | "kk", string[]> = {
  ru: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  kk: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
};

export function LiveClock() {
  const [now, setNow] = useState(() => new Date());
  const { lang, d, tr } = useT();

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-panel px-5 py-3 text-sm">
      <span className="text-ink-muted">{tr(d.hero.today)}</span>
      <span className="font-semibold text-ink">
        <span suppressHydrationWarning>{WEEKDAYS[lang][now.getDay()]}</span>,{" "}
        <span className="font-numeric" suppressHydrationWarning>
          {time}
        </span>
      </span>
    </div>
  );
}
