"use client";

import { useEffect, useState } from "react";

const WEEKDAYS = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

export function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-panel px-5 py-3 text-sm">
      <span className="text-ink-muted">Сегодня</span>
      <span className="font-semibold text-ink" suppressHydrationWarning>
        {WEEKDAYS[now.getDay()]}, <span className="font-numeric">{time}</span>
      </span>
    </div>
  );
}
