import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./blog-data";
import { COURSE_LEVELS } from "./course-data";
import { absoluteSiteUrl, ENGLISH_PATH } from "./site-config";

export const dynamic = "force-static";

const LAST_UPDATED = new Date("2026-08-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: absoluteSiteUrl("/"), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: absoluteSiteUrl(ENGLISH_PATH), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = [
    { url: absoluteSiteUrl("/blog/"), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.75 },
    { url: absoluteSiteUrl(`${ENGLISH_PATH}blog/`), lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.65 },
    ...BLOG_POSTS.flatMap((post) => [
      { url: absoluteSiteUrl(`/blog/${post.slug}/`), lastModified: new Date(post.updatedAt), changeFrequency: "monthly" as const, priority: 0.7 },
      { url: absoluteSiteUrl(`${ENGLISH_PATH}blog/${post.slug}/`), lastModified: new Date(post.updatedAt), changeFrequency: "monthly" as const, priority: 0.6 },
    ]),
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

  return [...corePages, ...blogPages, ...coursePages];
}
