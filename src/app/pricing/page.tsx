import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { BookingForm } from "@/components/sections/booking-form";
import { PricingCatalog } from "@/components/sections/pricing-catalog";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-data";

const TITLE = "Цены на услуги стоматологии в Астане";
const DESCRIPTION =
  "Прайс-лист стоматологии Genius в Астане: терапия, гигиена, ортопедия и ортодонтия. Точную стоимость лечения определяет врач на консультации.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: `${TITLE} — ${siteConfig.name}`,
    description: DESCRIPTION,
    url: "/pricing",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-2 sm:pt-4">
          <Container>
            <PricingCatalog />
          </Container>
        </section>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
