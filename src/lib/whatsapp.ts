import { siteConfig } from "@/lib/site-data";

// TODO: подтвердить, что это реальный WhatsApp-номер клиники (сейчас
// используется тот же номер, что и основной телефон).
const DEFAULT_MESSAGE = "Здравствуйте, хотел(а) записаться на приём.";

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return `${siteConfig.social.whatsapp}?text=${encodeURIComponent(message)}`;
}
