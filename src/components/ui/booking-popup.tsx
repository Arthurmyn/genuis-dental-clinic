"use client";

import { useEffect, useState } from "react";
import { PhoneIcon } from "@/components/icons";
import { useT } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-data";

const SHOWN_KEY = "genius-booking-popup-shown";
const SHOW_DELAY_MS = 5000;

export function BookingPopup() {
  const [open, setOpen] = useState(false);
  const { d, tr } = useT();

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SHOWN_KEY) === "1";
    } catch {
      // ignore
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SHOWN_KEY, "1");
      } catch {
        // ignore
      }
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={tr(d.popup.heading)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label={tr(d.popup.close)}
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
      />

      <div className="relative flex w-full max-w-sm flex-col items-center gap-5 rounded-[1.75rem] bg-panel p-8 text-center shadow-2xl shadow-ink/20">
        <button
          type="button"
          aria-label={tr(d.popup.close)}
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-panel-alt hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
          <PhoneIcon className="h-6 w-6 text-ink" />
        </span>

        <div className="flex flex-col gap-2">
          <h2 className="font-display text-xl font-bold">{tr(d.popup.heading)}</h2>
          <p className="text-sm leading-relaxed text-ink-muted">{tr(d.popup.description)}</p>
        </div>

        <a
          href={siteConfig.phoneHref}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-numeric text-lg font-bold text-panel transition-colors hover:bg-ink/85"
        >
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
