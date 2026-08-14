import type { Metadata } from "next";
import { BlogIndex } from "../../BlogContent";
import { absoluteSiteUrl } from "../../site-config";

export const metadata: Metadata = {
  title: "Coding for Kids Parent Guides",
  description: "Practical parent guides about coding classes for kids, ScratchJr, Scratch, Python, and choosing the right level.",
  alternates: { canonical: absoluteSiteUrl("/en/blog/"), languages: { ar: absoluteSiteUrl("/blog/"), en: absoluteSiteUrl("/en/blog/") } },
  openGraph: { type: "website", url: absoluteSiteUrl("/en/blog/"), title: "Kids Coding Hub Journal", description: "Practical guides for parents choosing a thoughtful coding start." },
};

export default function EnglishBlogPage() {
  return <BlogIndex language="en" />;
}
