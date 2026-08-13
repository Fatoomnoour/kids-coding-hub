import type { MetadataRoute } from "next";
import { absoluteSiteUrl, ENGLISH_PATH } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteSiteUrl("/"), lastModified: new Date("2026-08-13"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteSiteUrl(ENGLISH_PATH), lastModified: new Date("2026-08-13"), changeFrequency: "weekly", priority: 0.8 },
  ];
}
