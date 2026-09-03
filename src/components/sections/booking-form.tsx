"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { siteConfig } from "@/lib/site-data";

export function BookingForm() {
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
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="booking" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 rounded-xl bg-accent-soft/70 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:p-14">
          <Reveal className="flex flex-col justify-center gap-4">
            <SectionHeading
              eyebrow="Запись"
              title="Запишитесь на приём онлайн"
              description={`Оставьте заявку — администратор перезвонит и подберёт удобное время. Либо звоните прямо сейчас: ${siteConfig.phone}.`}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 rounded-lg bg-surface p-6 sm:p-8"
              noValidate
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Имя
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  className="rounded-sm border border-ink/15 bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Как к вам обращаться"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs text-red-700">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium">
                  Телефон
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className="rounded-sm border border-ink/15 bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="+7 (___) ___-__-__"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-xs text-red-700">{errors.phone.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="preferredTime" className="text-sm font-medium">
                  Удобное время
                </label>
                <input
                  id="preferredTime"
                  type="text"
                  className="rounded-sm border border-ink/15 bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Например, завтра после 18:00"
                  {...register("preferredTime")}
                />
                {errors.preferredTime && (
                  <p className="text-xs text-red-700">{errors.preferredTime.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="comment" className="text-sm font-medium">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  rows={3}
                  className="resize-none rounded-sm border border-ink/15 bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Что беспокоит? (необязательно)"
                  {...register("comment")}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="mt-2 justify-center">
                {isSubmitting ? "Отправляем…" : "Отправить заявку"}
              </Button>

              {status === "success" && (
                <p className="text-sm font-medium text-accent">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-700">
                  Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.
                </p>
              )}

              <p className="text-xs text-ink-muted">
                Отправляя форму, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
