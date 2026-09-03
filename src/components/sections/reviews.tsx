import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { StarIcon } from "@/components/icons";
import { reviews } from "@/lib/site-data";

export function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят пациенты"
          description="Позже здесь можно подключить живой виджет отзывов Google или 2ГИС." // TODO: подключить виджет
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name + i}
              delay={i * 0.08}
              className="flex h-full flex-col gap-4 rounded-md border border-ink/8 bg-surface p-6"
            >
              <div className="flex items-center gap-0.5 text-accent">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <StarIcon key={j} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink">{review.text}</p>
              <div className="mt-auto flex items-center justify-between pt-2 text-xs text-ink-muted">
                <span className="font-semibold text-ink">{review.name}</span>
                <span>
                  {review.source} · {review.date}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
