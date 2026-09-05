import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { BookingForm } from "@/components/sections/booking-form";
import { ServicesCatalog } from "@/components/sections/services-catalog";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-data";

const TITLE = "Услуги стоматологии в Астане";
const DESCRIPTION =
  "Полный каталог услуг стоматологии Genius в Астане: диагностика, гигиена, терапия, хирургия, ортопедия, виниры, имплантация (включая All-on-4 и All-on-6) и брекеты.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `${TITLE} - ${siteConfig.name}`,
    description: DESCRIPTION,
    url: "/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-2 sm:pt-4">
          <Container>
            <ServicesCatalog />
          </Container>
        </section>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
