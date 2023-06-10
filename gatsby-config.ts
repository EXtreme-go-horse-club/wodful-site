import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/fav.svg",
        name: `Wodful - Site`,
        short_name: `Wodful`,
        start_url: `/`,
      },
    },
  ],
};

export default config;
