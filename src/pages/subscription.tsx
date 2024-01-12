import * as React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Head } from "../components/SEO";
import { SubscriptionData } from "../components/Subscription";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventSubscriptions({ accessCode }: EventDetailsProps) {
  return (
    <Head>
      <Header isSimple />
      <SubscriptionData accessCode={accessCode}></SubscriptionData>
      <Footer isSimple />
    </Head>
  );
}
