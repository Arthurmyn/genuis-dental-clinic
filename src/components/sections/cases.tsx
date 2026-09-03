import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { cases } from "@/lib/site-data";

export function Cases() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Наши работы"
          title="Результаты, а не обещания"
          description="Реальные случаи из практики клиники — фото до и после лечения."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-1.5">
                <PhotoPlaceholder
                  label={`«до» — ${item.title.toLowerCase()}`}
                  className="aspect-square rounded-md"
                  rounded="rounded-md"
                />
                <PhotoPlaceholder
                  label={`«после» — ${item.title.toLowerCase()}`}
                  className="aspect-square rounded-md"
                  rounded="rounded-md"
                />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
