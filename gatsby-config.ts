import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Wodful - Site`,
    description: `Gestão de eventos de crossfit`,
    image: `./src/images/fav.svg`,
    siteUrl: `https://www.wodful.com`,
  },
};

export default config;
