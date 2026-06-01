import * as React from "react";
import FavIcon from "../../images/fav.svg";
import {
  buildCanonicalUrl,
  buildPageTitle,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  OG_IMAGE_URL,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "../../constants/seo";

export type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: OG_IMAGE_URL,
  description: DEFAULT_DESCRIPTION,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "pt-BR",
};

export const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  pathname = "/",
  image = OG_IMAGE_URL,
  noindex = false,
  jsonLd,
}: SeoProps) => {
  const pageTitle = title ? buildPageTitle(title) : DEFAULT_TITLE;
  const canonical = buildCanonicalUrl(pathname);
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  const structuredData =
    jsonLd === undefined
      ? null
      : jsonLd ?? [organizationJsonLd, websiteJsonLd];

  return (
    <>
      <html lang="pt-BR" />
      <title>{pageTitle}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={DEFAULT_KEYWORDS} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href={FavIcon} type="image/svg+xml" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="google-adsense-account" content="ca-pub-6685231272236714" />

      {structuredData &&
        (Array.isArray(structuredData) ? structuredData : [structuredData]).map(
          (data, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          )
        )}
    </>
  );
};
