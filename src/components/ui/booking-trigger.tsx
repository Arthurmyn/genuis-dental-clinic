"use client";

import type { ButtonHTMLAttributes } from "react";
import { openBookingModal } from "@/lib/booking-modal";

export function BookingTrigger({
  onClick,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      onClick={(event) => {
        openBookingModal();
        onClick?.(event);
      }}
      {...props}
    />
  );
}
