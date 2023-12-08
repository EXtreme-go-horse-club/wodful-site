import * as React from "react";
import { Head } from "../components/SEO";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { EventData } from "../components/EventData";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventDetails({ accessCode }: EventDetailsProps) {
  return (
    <Head>
      <Header />
      <EventData accessCode={accessCode}></EventData>
      <div>Você está listando o {accessCode}</div>
      <Footer />
    </Head>
  );
}
