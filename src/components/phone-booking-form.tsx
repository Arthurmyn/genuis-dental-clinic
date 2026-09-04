"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { bookingSchema, type BookingInput } from "@/lib/validations";

export function PhoneBookingForm({
  className,
  onSuccess,
}: {
  className?: string;
  onSuccess?: () => void;
}) {
  const id = useId();
  const phoneId = `phone-${id}`;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
  });

  async function onSubmit(data: BookingInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      reset();
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={className}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={phoneId} className="text-sm font-medium">
          Телефон
        </label>
        <input
          id={phoneId}
          type="tel"
          autoComplete="tel"
          className="rounded-sm border border-ink/15 bg-page px-4 py-2.5 text-sm outline-none transition-colors focus:border-ink"
          placeholder="+7 (___) ___-__-__"
          {...register("phone")}
        />
        {errors.phone && <p className="text-xs text-red-700">{errors.phone.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-4 w-full justify-center">
        {isSubmitting ? "Отправляем…" : "Отправить заявку"}
      </Button>

      {status === "success" && (
        <p className="mt-3 text-sm font-medium text-ink">
          Спасибо! Мы перезвоним в ближайшее время.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-700">
          Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.
        </p>
      )}

      <p className="mt-3 text-xs text-ink-muted">
        Отправляя форму, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
