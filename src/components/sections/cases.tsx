import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { cases } from "@/lib/site-data";

export function Cases() {
  return (
    <section className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>Наши работы</Eyebrow>
            <h2 className="max-w-lg font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Результаты, а не обещания
            </h2>
            <p className="max-w-lg text-sm text-ink-muted">
              Реальные случаи из практики клиники — фото до и после лечения.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-1.5">
                  <PhotoPlaceholder
                    src={item.before}
                    label={`До: ${item.title.toLowerCase()}`}
                    className="aspect-square rounded-[1.25rem]"
                    rounded="rounded-[1.25rem]"
                  />
                  <PhotoPlaceholder
                    src={item.after}
                    label={`После: ${item.title.toLowerCase()}`}
                    className="aspect-square rounded-[1.25rem]"
                    rounded="rounded-[1.25rem]"
                  />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold">{item.title}</h3>
                  <p className="text-sm text-ink-muted">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
