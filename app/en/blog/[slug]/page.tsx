import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "../../../BlogContent";
import { BLOG_POSTS, getBlogPost } from "../../../blog-data";
import { absoluteSiteUrl, ENGLISH_PATH } from "../../../site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const path = `${ENGLISH_PATH}blog/${post.slug}/`;
  return {
    title: post.titleEn,
    description: post.excerptEn,
    keywords: post.keywordsEn,
    alternates: { canonical: absoluteSiteUrl(path), languages: { ar: absoluteSiteUrl(`/blog/${post.slug}/`), en: absoluteSiteUrl(path) } },
    openGraph: { type: "article", url: absoluteSiteUrl(path), title: post.titleEn, description: post.excerptEn, locale: "en_US", publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: ["Fatma Nour"], images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: post.titleEn }] },
    twitter: { card: "summary_large_image", title: post.titleEn, description: post.excerptEn, images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")] },
  };
}

export default async function EnglishBlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const path = absoluteSiteUrl(`${ENGLISH_PATH}blog/${post.slug}/`);
  const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${path}#article`, headline: post.titleEn, description: post.excerptEn, image: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")], articleSection: post.categoryEn, keywords: post.keywordsEn.join(", "), datePublished: post.publishedAt, dateModified: post.updatedAt, inLanguage: "en", author: { "@type": "Person", name: "Fatma Nour", url: absoluteSiteUrl("/#about") }, publisher: { "@type": "Organization", name: "Kids Coding Hub", url: absoluteSiteUrl("/") }, mainEntityOfPage: path };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><BlogPostView post={post} language="en" /></>;
}
