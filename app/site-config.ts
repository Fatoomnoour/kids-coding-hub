const DEFAULT_SITE_URL = "https://fatma-nour-tech.plus1o.chatgpt.site";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
).replace(/\/$/, "");

export const BASE_PATH = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? ""
).replace(/\/$/, "");

// GitHub Pages is most reliable with a real, root-level HTML file. During
// Pages builds the workflow creates /en.html from the statically exported
// /en/index.html. Other hosts keep the normal clean /en/ route.
export const ENGLISH_PATH = BASE_PATH ? "/en.html" : "/en/";

export function sitePath(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
}

export function absoluteSiteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
