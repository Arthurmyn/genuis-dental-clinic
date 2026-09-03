import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
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
      className={`${unbounded.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
