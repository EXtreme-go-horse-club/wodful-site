import * as React from "react";
import { Header } from "../components/Header";
import { Head } from "../components/SEO";
import { Success } from "../components/Success";

export default function SubscriptionSuccess() {
  return (
    <Head>
      <Header isSimple />
      <Success />
    </Head>
  );
}
