import type { Lang } from "@/lib/i18n";
import type { PriceItem } from "@/lib/site-data";

const FROM_WORD: Record<Lang, string> = { ru: "от", kk: "бастап" };
const TO_WORD: Record<Lang, string> = { ru: "до", kk: "дейін" };

export function formatPrice(item: PriceItem, lang: Lang): string {
  const price = item.price.toLocaleString("ru-RU");
  if (item.priceTo) {
    const priceTo = item.priceTo.toLocaleString("ru-RU");
    return `${FROM_WORD[lang]} ${price} ${TO_WORD[lang]} ${priceTo} ₸`;
  }
  if (item.openEnded) {
    return `${FROM_WORD[lang]} ${price} ₸`;
  }
  return `${price} ₸`;
}

/** The number used for a category's big featured "от X" figure. */
export function minPriceOf(items: PriceItem[]): number {
  return Math.min(...items.map((item) => item.price));
}
