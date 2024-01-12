import * as React from "react";
import { EventData } from "../components/EventData";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Head } from "../components/SEO";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventDetails({ accessCode }: EventDetailsProps) {
  return (
    <Head>
      <Header isSimple />
      <EventData accessCode={accessCode}></EventData>
      <Footer isSimple />
    </Head>
  );
}
