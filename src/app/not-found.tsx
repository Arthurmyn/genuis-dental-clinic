import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 py-6">
        <Container>
          <Panel className="flex flex-col items-center gap-6 py-20 text-center">
            <span className="font-numeric text-6xl font-bold text-ink-muted">404</span>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Страница не найдена
            </h1>
            <p className="max-w-md text-base text-ink-muted">
              Такой страницы не существует или она была перемещена. Вернитесь на главную
              или посмотрите каталог услуг.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <LinkButton href="/">На главную</LinkButton>
              <LinkButton href="/services" variant="outline">
                Каталог услуг
              </LinkButton>
            </div>
          </Panel>
        </Container>
      </main>
      <Footer />
    </>
  );
}
