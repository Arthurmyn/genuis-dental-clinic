import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = bookingSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // TODO: отправить заявку в Telegram/CRM/на email вместо логирования.
  console.log("Новая заявка на запись:", parsed.data);

  return NextResponse.json({ ok: true });
}
