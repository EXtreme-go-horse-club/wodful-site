import * as React from "react";
import { Head } from "../components/SEO";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SubscriptionData } from "../components/Subscription";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventSubscriptions({ accessCode }: EventDetailsProps) {
  return (
    <Head>
      <Header />
      <SubscriptionData accessCode={accessCode}></SubscriptionData>
      <Footer />
    </Head>
  );
}
