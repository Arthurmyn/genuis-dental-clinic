"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { useT } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-data";

export function BookingForm() {
  const { d, tr } = useT();

  return (
    <section id="booking" className="py-6">
      <Container>
        <div className="grid gap-10 rounded-[2rem] bg-accent p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-14">
          <Reveal className="flex flex-col justify-center gap-4">
            <SectionHeading
              eyebrow={tr(d.booking.eyebrow)}
              title={tr(d.booking.heading)}
              description={`${tr(d.booking.description)} ${siteConfig.phone}`}
            />
          </Reveal>

          <Reveal delay={0.1} className="flex justify-start lg:justify-end">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-5 font-ui text-lg font-bold text-panel transition-colors hover:bg-ink/85"
            >
              {tr(d.common.whatsappCta)}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-panel text-ink transition-transform group-hover:rotate-45">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
