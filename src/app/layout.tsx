import type { Metadata } from "next";
import { Inter, Manrope, PT_Sans, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/site-data";
import { StructuredData } from "@/components/structured-data";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const SITE_URL = "https://genuis-dental.vercel.app";
const TITLE = `${siteConfig.name} — стоматология в Астане`;
const DESCRIPTION =
  "Стоматология в Астане (ул. Толе би, 55): терапия, хирургия, имплантация All-on-4/All-on-6, виниры и брекеты. Рейтинг 5.0 на 2ГИС. Запишитесь на приём онлайн.";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${siteConfig.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "стоматология Астана",
    "стоматологическая клиника Астана",
    "имплантация зубов Астана",
    "виниры Астана",
    "брекеты Астана",
    "лечение зубов Астана",
    "All-on-4 Астана",
    "All-on-6 Астана",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: siteConfig.name,
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${inter.variable} ${ptSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-page font-sans text-ink">
        <StructuredData />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
