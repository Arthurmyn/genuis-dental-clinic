import type { Lang } from "@/lib/i18n";
import type { PriceItem } from "@/lib/site-data";

export function formatPrice(item: PriceItem, lang: Lang): string {
  const price = item.price.toLocaleString("ru-RU");

  if (item.priceTo) {
    const priceTo = item.priceTo.toLocaleString("ru-RU");
    // Kazakh word order puts "бастап"/"дейін" after the number they modify
    // ("X ₸ бастап Y ₸ дейін"), unlike the Russian calque "от X до Y ₸".
    return lang === "kk"
      ? `${price} ₸ бастап ${priceTo} ₸ дейін`
      : `от ${price} до ${priceTo} ₸`;
  }
  if (item.openEnded) {
    return lang === "kk" ? `${price} ₸ бастап` : `от ${price} ₸`;
  }
  return `${price} ₸`;
}

/** The number used for a category's big featured "от X" figure. */
export function minPriceOf(items: PriceItem[]): number {
  return Math.min(...items.map((item) => item.price));
}
