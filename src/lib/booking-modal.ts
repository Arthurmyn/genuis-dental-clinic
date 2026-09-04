export const BOOKING_MODAL_EVENT = "open-booking-modal";

export function openBookingModal() {
  window.dispatchEvent(new Event(BOOKING_MODAL_EVENT));
}
