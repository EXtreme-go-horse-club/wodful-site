import type { PageProps } from "gatsby";
import "normalize.css/normalize.css";
import * as React from "react";
import { Banner } from "../components/Banner";
import { Benefits } from "../components/Benefits";
import { Contact } from "../components/Contact";
import { Feature } from "../components/Features";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Mobile } from "../components/Mobile";
import { Head } from "../components/SEO";
import "../styles/global.module.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Head>
      <Header />
      <Feature />
      <Banner />
      <Benefits />
      <Mobile />
      <Contact />
      <Footer />
    </Head>
  );
};

export default IndexPage;
