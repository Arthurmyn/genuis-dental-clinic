import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PhoneBookingForm } from "@/components/phone-booking-form";
import { siteConfig } from "@/lib/site-data";

export function BookingForm() {
  return (
    <section id="booking" className="py-6">
      <Container>
        <div className="grid gap-10 rounded-[2rem] bg-accent p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:p-14">
          <Reveal className="flex flex-col justify-center gap-4">
            <SectionHeading
              eyebrow="Запись"
              title="Запишитесь на приём онлайн"
              description={`Оставьте номер телефона — администратор перезвонит и подберёт удобное время. Либо звоните сами: ${siteConfig.phone}.`}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <PhoneBookingForm className="flex flex-col rounded-[1.5rem] bg-panel p-6 sm:p-8" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
