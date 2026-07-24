const DEFAULT_SITE_URL = "https://fatoomnoour.github.io/kids-coding-hub";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
).replace(/\/$/, "");

export const BASE_PATH = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? ""
).replace(/\/$/, "");

// Keep a clean, stable URL for the English experience on every host.
// The GitHub Pages preparation script guarantees /en/index.html exists.
export const ENGLISH_PATH = "/en/";

export function sitePath(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
}

export function absoluteSiteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
