import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { doctors } from "@/lib/site-data";

export function Doctors() {
  return (
    <section id="doctors" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Команда"
          title="Врачи, которым доверяют"
          description="Каждый специалист регулярно проходит повышение квалификации и работает по единому протоколу качества."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.name + i} delay={i * 0.07} className="flex flex-col gap-4">
              <PhotoPlaceholder
                label={`портрет врача — ${doctor.role.toLowerCase()}`}
                className="aspect-[3/4] w-full rounded-md"
                rounded="rounded-md"
              />
              <div>
                <h3 className="font-display text-base font-semibold">{doctor.name}</h3>
                <p className="text-sm text-ink-muted">{doctor.role}</p>
                <p className="mt-1 text-xs font-medium text-accent">
                  Опыт {doctor.experienceYears} лет
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
