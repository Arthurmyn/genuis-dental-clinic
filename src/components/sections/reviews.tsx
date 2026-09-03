import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { StarIcon } from "@/components/icons";
import { reviews } from "@/lib/site-data";

export function Reviews() {
  return (
    <section id="reviews" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>Отзывы</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Что говорят пациенты
            </h2>
            <p className="max-w-lg text-sm text-ink-muted">
              Позже здесь можно подключить живой виджет отзывов Google или 2ГИС.
              {/* TODO: подключить виджет */}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal
                key={review.name + i}
                delay={i * 0.08}
                className="flex h-full flex-col gap-4 rounded-[1.5rem] bg-panel-alt p-6"
              >
                <div className="flex items-center gap-3">
                  <PhotoPlaceholder
                    label="фото пациента"
                    className="h-11 w-11 shrink-0 rounded-full"
                    rounded="rounded-full"
                    compact
                  />
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <div className="flex items-center gap-1 text-ink-muted">
                      <StarIcon className="h-3.5 w-3.5 text-ink" />
                      <span className="text-xs font-medium">{review.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{review.text}</p>
                <p className="mt-auto text-xs text-ink-muted">
                  {review.source} · {review.date}
                </p>
              </Reveal>
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
