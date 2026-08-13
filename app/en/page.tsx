import type { Metadata } from "next";
import KidsCodingHubPage from "../KidsCodingHubPage";
import { absoluteSiteUrl, ENGLISH_PATH } from "../site-config";

export const metadata: Metadata = {
  title: "Coding for Kids Online",
  description: "A practical 3-month, 24-live-session program helping ages 6–18+ build a game, interactive story, or Python project with clear parent follow-up.",
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
    languages: {
      "ar-EG": absoluteSiteUrl("/"),
      en: absoluteSiteUrl(ENGLISH_PATH),
      "x-default": absoluteSiteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: absoluteSiteUrl(ENGLISH_PATH),
    title: "Kids Coding Hub | From curiosity to a first project",
    description: "A practical 3-month, 24-live-session coding program for children, with clear outcomes and parent follow-up.",
    siteName: "Kids Coding Hub",
    images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: "Kids Coding Hub with Fatma Nour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Coding Hub",
    description: "Project-based coding and AI learning for ages 6–18+, with a clear program journey and final project.",
    images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")],
  },
};

export default function EnglishHome() {
  return <KidsCodingHubPage language="en" />;
}
