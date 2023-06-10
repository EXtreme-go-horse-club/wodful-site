import React from "react";
import FacIcon from "../../images/fav.svg";

type SEOProps = {
  children: React.ReactNode;
};

const SEO = ({ children }: SEOProps) => (
  <>
    <title>Wodful Site</title>
    <link id="icon" rel="icon" href={FacIcon} />
    <meta charSet="UTF-8" />
    <meta name="description" content="Gestão de eventos de Crossfit" />
    <meta name="keywords" content="Crossfit, Fitness, Competição" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {children}
  </>
);

export const Head = ({ children }: SEOProps) => <SEO>{children}</SEO>;
