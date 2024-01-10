import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/fav.svg",
        name: `Wodful - Gestão de eventos de crossfit`,
        short_name: `Wodful`,
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `${process.env.GATSBY_GA_ID}`, // Google Analytics / GA
        ],
      },
    },
  ],
};

export default config;
