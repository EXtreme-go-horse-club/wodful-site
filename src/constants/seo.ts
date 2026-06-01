export const SITE_URL =
  process.env.GATSBY_SITE_URL?.replace(/\/$/, "") || "https://wodful.com";

export const SITE_NAME = "Wodful";

export const SITE_LOCALE = "pt_BR";

export const DEFAULT_TITLE =
  "Wodful | Plataforma para competições CrossFit";

export const TITLE_TEMPLATE = "%s | Wodful";

export const DEFAULT_DESCRIPTION =
  "Plataforma para gestão de competições CrossFit: inscrições online, placar ao vivo e cronograma em tempo real. Para organizadores de boxes, festivais e campeonatos.";

export const DEFAULT_KEYWORDS = [
  "crossfit",
  "competição crossfit",
  "gestão de eventos",
  "inscrições crossfit",
  "leaderboard crossfit",
  "cronograma competição",
  "placar ao vivo",
  "wodful",
].join(", ");

export const OG_IMAGE_PATH = "/og-image.svg";

export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export const TWITTER_HANDLE = "@wodful";

export function buildCanonicalUrl(pathname = "/"): string {
  if (pathname === "/" || pathname === "") {
    return `${SITE_URL}/`;
  }
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${path}`;
}

export function buildPageTitle(title?: string): string {
  if (!title) return DEFAULT_TITLE;
  return TITLE_TEMPLATE.replace("%s", title);
}
