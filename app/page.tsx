import type { Metadata } from "next";
import KidsCodingHubPage from "./KidsCodingHubPage";
import { absoluteSiteUrl, ENGLISH_PATH } from "./site-config";

export const metadata: Metadata = {
  title: "تعليم البرمجة للأطفال أونلاين",
  description: "Levels عملية لتعليم البرمجة والذكاء الاصطناعي للأطفال من 6 إلى 18+ سنة. مدة كل Level 3 أشهر و24 جلسة Live، وتنتهي بمشروع مع متابعة واضحة لولي الأمر.",
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
    description: "كل Level مدته 3 أشهر و24 جلسة Live لتعليم Scratch وPython للأطفال بطريقة عملية، وينتهي بمشروع واضح مع متابعة لولي الأمر.",
    siteName: "Kids Coding Hub",
    images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: "Kids Coding Hub with Fatma Nour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Coding Hub",
    description: "Levels في البرمجة والذكاء الاصطناعي للأطفال من 6 إلى 18+ سنة؛ مدة كل Level 3 أشهر ومشروع واضح في النهاية.",
    images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")],
  },
};

export default function Home() {
  return <KidsCodingHubPage language="ar" />;
}
