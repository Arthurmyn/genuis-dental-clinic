import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { BookingForm } from "@/components/sections/booking-form";
import { ServicesCatalog } from "@/components/sections/services-catalog";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Услуги — ${siteConfig.name}`,
  description: "Полный каталог стоматологических услуг: диагностика, гигиена, терапия, имплантация, ортодонтия и детская стоматология.",
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
