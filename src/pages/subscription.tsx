import type { HeadFC } from "gatsby";
import * as React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Seo } from "../components/SEO";
import { SubscriptionData } from "../components/Subscription";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventSubscriptions({ accessCode }: EventDetailsProps) {
  return (
    <>
      <Header isSimple />
      <SubscriptionData accessCode={accessCode} />
      <Footer isSimple />
    </>
  );
}

export const Head: HeadFC = () => (
  <Seo
    title="Inscrição no evento"
    description="Formulário de inscrição para competições CrossFit na plataforma Wodful."
    pathname="/subscription"
    noindex
    jsonLd={undefined}
  />
);
