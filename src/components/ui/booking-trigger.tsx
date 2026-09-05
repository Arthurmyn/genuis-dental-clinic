import type { AnchorHTMLAttributes } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// A "Записаться" call-to-action that opens a WhatsApp chat with the
// clinic, prefilled with a booking message, instead of an in-page form.
export function BookingTrigger({
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a href={href ?? getWhatsAppUrl()} target={target} rel={rel} {...props} />;
}
