import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Doctors } from "@/components/sections/doctors";
import { Cases } from "@/components/sections/cases";
import { Reviews } from "@/components/sections/reviews";
import { Pricing } from "@/components/sections/pricing";
import { Location } from "@/components/sections/location";
import { BookingForm } from "@/components/sections/booking-form";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Doctors />
        <Cases />
        <Reviews />
        <Pricing />
        <Location />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
