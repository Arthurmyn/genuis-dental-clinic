import type { Metadata } from "next";
import { Inter, Manrope, PT_Sans, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/site-data";
import { BookingModal } from "@/components/booking-modal";
import "./globals.css";

// Headings — soft, rounded geometric sans, supports Cyrillic.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
});

// Body copy — clean and universal, supports Cyrillic.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

// UI chrome (nav, buttons, labels) — neutral and easy to read, supports Cyrillic.
const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

// Numerals, prices and the Latin-script brand mark. Google's Space Grotesk
// ships no Cyrillic glyphs, so Russian text set in it silently falls back
// to the body font — it only visibly applies to digits/Latin characters.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Современная стоматологическая клиника: терапия, имплантация, ортодонтия и детская стоматология. Запишитесь на приём онлайн.",
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Современная стоматологическая клиника: терапия, имплантация, ортодонтия и детская стоматология.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${inter.variable} ${ptSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page font-sans text-ink">
        {children}
        <BookingModal />
      </body>
    </html>
  );
}
