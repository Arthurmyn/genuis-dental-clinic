import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Avatar } from "@/components/ui/avatar";
import { StarIcon } from "@/components/icons";
import { reviews, siteConfig } from "@/lib/site-data";

export function Reviews() {
  return (
    <section id="reviews" className="py-6">
      <Container>
        <Panel className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>Отзывы</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-lg font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Что говорят пациенты
              </h2>
              <div className="flex items-center gap-2 rounded-full bg-panel-alt px-4 py-2 text-sm">
                <StarIcon className="h-4 w-4 text-ink" />
                <span className="font-numeric font-bold">{siteConfig.rating.toFixed(1)}</span>
                <span className="text-ink-muted">
                  · <span className="font-numeric">{siteConfig.reviewCount}</span> отзывов на 2ГИС
                </span>
              </div>
            </div>
            <p className="max-w-lg text-sm text-ink-muted">
              Реальные отзывы пациентов клиники с 2ГИС.
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
                  <Avatar name={review.name} className="h-11 w-11 shrink-0 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <div className="flex items-center gap-1 text-ink-muted">
                      <StarIcon className="h-3.5 w-3.5 text-ink" />
                      <span className="font-numeric text-xs font-bold">
                        {review.rating.toFixed(1)}
                      </span>
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

          <a
            href={`${siteConfig.twoGisFirmUrl}/tab/reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-ui text-sm font-bold text-panel transition-colors hover:bg-ink/85"
          >
            Посмотреть все отзывы на 2ГИС
          </a>
        </Panel>
      </Container>
    </section>
  );
}
