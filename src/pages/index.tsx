import type { PageProps } from "gatsby";
import * as React from "react";
import { Banner } from "../components/Banner";
import { Benefits } from "../components/Benefits";
import { Content } from "../components/Content";
import { Feature } from "../components/Features";
import { FinalCta } from "../components/FinalCta";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Mobile } from "../components/Mobile";
import { Head } from "../components/SEO";
import { SkipLink } from "../components/SkipLink";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonials";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Head>
      <SkipLink />
      <Header />
      <Content />
      <Stats />
      <Feature />
      <Banner />
      <Benefits />
      <Testimonials />
      <Mobile />
      <FinalCta />
      <Footer />
    </Head>
  );
};

export default IndexPage;
