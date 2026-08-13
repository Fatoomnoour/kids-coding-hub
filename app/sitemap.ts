import type { MetadataRoute } from "next";
import { COURSE_LEVELS } from "./course-data";
import { absoluteSiteUrl, ENGLISH_PATH } from "./site-config";

export const dynamic = "force-static";

const LAST_UPDATED = new Date("2026-08-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: absoluteSiteUrl("/"), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: absoluteSiteUrl(ENGLISH_PATH), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
  ];

  const coursePages: MetadataRoute.Sitemap = COURSE_LEVELS.flatMap((course) => [
    {
      url: absoluteSiteUrl(`/courses/${course.slug}/`),
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: course.available ? 0.9 : 0.7,
    },
    {
      url: absoluteSiteUrl(`${ENGLISH_PATH}courses/${course.slug}/`),
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: course.available ? 0.75 : 0.6,
    },
  ]);

  return [...corePages, ...coursePages];
}
