"use client";

import { useEffect, useState } from "react";
import { PhoneBookingForm } from "@/components/phone-booking-form";
import { BOOKING_MODAL_EVENT } from "@/lib/booking-modal";

export function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
    }
    window.addEventListener(BOOKING_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(BOOKING_MODAL_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div className="relative w-full max-w-sm rounded-[1.5rem] bg-panel p-6 shadow-xl sm:p-8">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Закрыть"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-panel-alt hover:text-ink"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M5 5 19 19M19 5 5 19" />
          </svg>
        </button>

        <h3 className="pr-8 font-display text-xl font-bold">Записаться на приём</h3>
        <p className="mt-1 text-sm text-ink-muted">
          Оставьте номер телефона — мы перезвоним и подберём удобное время.
        </p>

        <PhoneBookingForm className="mt-5 flex flex-col" />
      </div>
    </div>
  );
}
