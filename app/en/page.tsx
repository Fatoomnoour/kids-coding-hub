import type { Metadata } from "next";
import KidsCodingHubPage from "../KidsCodingHubPage";
import { absoluteSiteUrl, ENGLISH_PATH } from "../site-config";

export const metadata: Metadata = {
  title: "Kids Coding Hub | Coding & AI for Kids",
  description: "Live, project-based Scratch, Python, and AI learning for ages 5–16 with Fatma Nour. Online programs for families, schools, and academies across Egypt and the GCC.",
  keywords: [
    "coding for kids",
    "Scratch course for kids",
    "Python for kids",
    "AI for kids",
    "coding instructor for kids",
    "Kids Coding Hub",
    "Fatma Nour",
    "school coding workshops",
  ],
  alternates: {
    canonical: absoluteSiteUrl(ENGLISH_PATH),
    languages: { "ar-EG": absoluteSiteUrl("/"), "en": absoluteSiteUrl(ENGLISH_PATH) },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: absoluteSiteUrl(ENGLISH_PATH),
    title: "Kids Coding Hub | From curiosity to a first project",
    description: "Clear, hands-on, project-based coding and AI learning for children.",
    siteName: "Kids Coding Hub",
    images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: "Kids Coding Hub with Fatma Nour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Coding Hub",
    description: "Project-based coding and AI learning for ages 5–16.",
    images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")],
  },
};

export default function EnglishHome() {
  return <KidsCodingHubPage language="en" />;
}
