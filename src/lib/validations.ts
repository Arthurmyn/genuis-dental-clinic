import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Введите имя").max(80),
  phone: z
    .string()
    .trim()
    .min(10, "Введите номер телефона")
    .regex(/^[\d\s()+-]+$/, "Некорректный номер телефона"),
  preferredTime: z.string().trim().min(1, "Укажите удобное время"),
  comment: z.string().trim().max(500).optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;
