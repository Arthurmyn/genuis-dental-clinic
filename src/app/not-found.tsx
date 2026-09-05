"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { LinkButton } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export default function NotFound() {
  const { d, tr } = useT();

  return (
    <>
      <Header />
      <main className="flex-1 py-6">
        <Container>
          <Panel className="flex flex-col items-center gap-6 py-20 text-center">
            <span className="font-numeric text-6xl font-bold text-ink-muted">404</span>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {tr(d.notFound.title)}
            </h1>
            <p className="max-w-md text-base text-ink-muted">{tr(d.notFound.description)}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <LinkButton href="/">{tr(d.notFound.home)}</LinkButton>
              <LinkButton href="/services" variant="outline">
                {tr(d.notFound.catalog)}
              </LinkButton>
            </div>
          </Panel>
        </Container>
      </main>
      <Footer />
    </>
  );
}
