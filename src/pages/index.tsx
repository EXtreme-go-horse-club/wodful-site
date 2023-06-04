import type { PageProps } from "gatsby";
import "normalize.css/normalize.css";
import * as React from "react";
import { Feature } from "../components/Features";
import { Header } from "../components/Header";
import "../styles/global.module.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Feature />
    </>
  );
};

export default IndexPage;
