import type { MetadataRoute } from "next";
import { absoluteSiteUrl, SITE_URL } from "./site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteSiteUrl("/sitemap.xml"),
    host: new URL(SITE_URL).origin,
  };
}
