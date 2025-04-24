import React from "react";

import FavIcon from "./../../images/fav.svg";

type SEOProps = {
  children: React.ReactNode;
};

const SEO = ({ children }: SEOProps) => (
  <>
    <title>Wodful Site</title>
    <meta charSet="UTF-8" />
    <link rel="icon" href={FavIcon} type="image/svg+xml" />
    <meta name="description" content="Gestão de eventos de Crossfit" />
    <meta name="keywords" content="Crossfit, Fitness, Competição" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-adsense-account" content="ca-pub-6685231272236714" />
    {children}
  </>
);

export const Head = ({ children }: SEOProps) => <SEO>{children}</SEO>;
