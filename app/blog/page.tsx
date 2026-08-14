import type { Metadata } from "next";
import { BlogIndex } from "../BlogContent";
import { absoluteSiteUrl } from "../site-config";

export const metadata: Metadata = {
  title: "مدونة تعليم البرمجة للأطفال",
  description: "أدلة عملية للأهالي حول تعليم البرمجة للأطفال، ScratchJr، Scratch، Python واختيار المستوى المناسب.",
  alternates: { canonical: absoluteSiteUrl("/blog/"), languages: { ar: absoluteSiteUrl("/blog/"), en: absoluteSiteUrl("/en/blog/") } },
  openGraph: { type: "website", url: absoluteSiteUrl("/blog/"), title: "مدونة Kids Coding Hub", description: "أدلة عملية تساعد الأهالي على اختيار بداية صحيحة في البرمجة." },
};

export default function ArabicBlogPage() {
  return <BlogIndex language="ar" />;
}
