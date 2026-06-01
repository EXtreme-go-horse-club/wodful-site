import type { HeadFC } from "gatsby";
import * as React from "react";
import { EventData } from "../components/EventData";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Seo } from "../components/SEO";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventDetails({ accessCode }: EventDetailsProps) {
  return (
    <>
      <Header isSimple />
      <EventData accessCode={accessCode} />
      <Footer isSimple />
    </>
  );
}

export const Head: HeadFC = () => (
  <Seo
    title="Detalhes do evento"
    description="Informações e inscrição para competições CrossFit gerenciadas pela Wodful."
    pathname="/event"
    noindex
    jsonLd={undefined}
  />
);
