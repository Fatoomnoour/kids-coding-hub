import type { Metadata } from "next";
import KidsCodingHubPage from "./KidsCodingHubPage";
import { absoluteSiteUrl, ENGLISH_PATH } from "./site-config";

export const metadata: Metadata = {
  title: "تعليم البرمجة للأطفال أونلاين",
  description: "برنامج عربي عملي لمدة 3 أشهر و24 جلسة Live، يساعد الأطفال من 6 إلى 18+ سنة على بناء لعبة أو قصة تفاعلية أو مشروع Python مع متابعة واضحة لولي الأمر.",
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
    languages: {
      "ar-EG": absoluteSiteUrl("/"),
      en: absoluteSiteUrl(ENGLISH_PATH),
      "x-default": absoluteSiteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: absoluteSiteUrl("/"),
    title: "Kids Coding Hub | من فضول طفلك إلى أول مشروع",
    description: "3 أشهر و24 جلسة Live لتعليم Scratch وPython للأطفال بطريقة عملية قائمة على المشروعات، مع متابعة واضحة لولي الأمر.",
    siteName: "Kids Coding Hub",
    images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: "Kids Coding Hub with Fatma Nour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Coding Hub",
    description: "تعليم برمجة وذكاء اصطناعي قائم على المشروعات للأطفال من 6 إلى 18+ سنة، مع برنامج واضح ومشروع نهائي.",
    images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")],
  },
};

export default function Home() {
  return <KidsCodingHubPage language="ar" />;
}
