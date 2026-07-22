const DEFAULT_SITE_URL = "https://fatma-nour-tech.plus1o.chatgpt.site";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
).replace(/\/$/, "");

export const BASE_PATH = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? ""
).replace(/\/$/, "");

export function sitePath(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
}

export function absoluteSiteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
