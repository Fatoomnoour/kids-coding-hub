import type { Metadata } from "next";
import KidsCodingHubPage from "./KidsCodingHubPage";
import { absoluteSiteUrl } from "./site-config";

export const metadata: Metadata = {
  title: "Kids Coding Hub | تعليم البرمجة والذكاء الاصطناعي للأطفال",
  description: "مسارات Scratch وPython والذكاء الاصطناعي للأطفال من 5 إلى 16 سنة، بتعليم مباشر قائم على المشروعات مع فاطمة نور. أونلاين في مصر والخليج.",
  keywords: [
    "تعليم البرمجة للأطفال",
    "كورس Scratch للأطفال",
    "Python للأطفال",
    "ذكاء اصطناعي للأطفال",
    "مدربة برمجة للأطفال",
    "Kids Coding Hub",
    "فاطمة نور",
    "ورش برمجة للمدارس",
  ],
  alternates: {
    canonical: absoluteSiteUrl("/"),
    languages: { "ar-EG": absoluteSiteUrl("/"), "en": absoluteSiteUrl("/en/") },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: absoluteSiteUrl("/"),
    title: "Kids Coding Hub | من الفضول إلى أول مشروع",
    description: "برمجة وذكاء اصطناعي للأطفال بطريقة بسيطة، عملية، وقائمة على المشروعات.",
    siteName: "Kids Coding Hub",
    images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: "Kids Coding Hub with Fatma Nour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Coding Hub",
    description: "تعليم برمجة وذكاء اصطناعي قائم على المشروعات للأطفال من 5 إلى 16 سنة.",
    images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")],
  },
};

export default function Home() {
  return <KidsCodingHubPage language="ar" />;
}
