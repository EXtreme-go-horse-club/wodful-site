import * as React from "react";
import { EventData } from "../components/EventData";
import { Head } from "../components/SEO";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventDetails({ accessCode }: EventDetailsProps) {
  return (
    <Head>
      <EventData accessCode={accessCode}></EventData>
    </Head>
  );
}
