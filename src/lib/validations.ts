import { z } from "zod";

export const bookingSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(10, "Введите номер телефона")
    .regex(/^[\d\s()+-]+$/, "Некорректный номер телефона"),
});

export type BookingInput = z.infer<typeof bookingSchema>;
