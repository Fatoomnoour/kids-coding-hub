import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "../../BlogContent";
import { BLOG_POSTS, getBlogPost } from "../../blog-data";
import { absoluteSiteUrl, ENGLISH_PATH } from "../../site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}/`;
  return {
    title: post.titleAr,
    description: post.excerptAr,
    keywords: post.keywordsAr,
    alternates: { canonical: absoluteSiteUrl(path), languages: { ar: absoluteSiteUrl(path), en: absoluteSiteUrl(`${ENGLISH_PATH}blog/${post.slug}/`) } },
    openGraph: { type: "article", url: absoluteSiteUrl(path), title: post.titleAr, description: post.excerptAr, locale: "ar_EG", publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: ["Fatma Nour"], images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: post.titleAr }] },
    twitter: { card: "summary_large_image", title: post.titleAr, description: post.excerptAr, images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")] },
  };
}

export default async function ArabicBlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const path = absoluteSiteUrl(`/blog/${post.slug}/`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${path}#article`,
        headline: post.titleAr,
        description: post.excerptAr,
        image: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")],
        articleSection: post.categoryAr,
        keywords: post.keywordsAr.join(", "),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: "ar",
        author: { "@type": "Person", name: "Fatma Nour", url: absoluteSiteUrl("/#about") },
        publisher: { "@type": "Organization", name: "Kids Coding Hub", url: absoluteSiteUrl("/") },
        mainEntityOfPage: path,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${path}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: absoluteSiteUrl("/") },
          { "@type": "ListItem", position: 2, name: "المدونة", item: absoluteSiteUrl("/blog/") },
          { "@type": "ListItem", position: 3, name: post.categoryAr, item: path },
        ],
      },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><BlogPostView post={post} language="ar" /></>;
}
