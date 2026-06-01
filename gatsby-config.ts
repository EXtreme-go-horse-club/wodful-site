import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl =
  process.env.GATSBY_SITE_URL?.replace(/\/$/, "") || "https://wodful.com";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Wodful",
    description:
      "Plataforma para gestão de competições CrossFit: inscrições online, placar ao vivo e cronograma em tempo real.",
    siteUrl,
    author: "Wodful",
    locale: "pt_BR",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/fav.svg",
        name: "Wodful — Gestão de competições CrossFit",
        short_name: "Wodful",
        start_url: "/",
        background_color: "#060919",
        theme_color: "#319795",
        lang: "pt-BR",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          "/404",
          "/404.html",
          "/dev-404-page",
          "/subscription-success",
          "/event",
          "/subscription",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/subscription-success", "/404"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [`${process.env.GATSBY_GA_ID}`],
      },
    },
  ],
};

export default config;
