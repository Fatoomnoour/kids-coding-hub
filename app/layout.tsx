import type { Metadata } from "next";
import Analytics from "./Analytics";
import { absoluteSiteUrl, SITE_URL } from "./site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kids Coding Hub | Coding & AI for Kids",
    template: "%s | Kids Coding Hub",
  },
  description: "Project-based coding and AI learning for children with Fatma Nour.",
  authors: [{ name: "Fatma Nour", url: "https://www.linkedin.com/in/fatma-nour-ai-trainer" }],
  creator: "Fatma Nour",
  publisher: "Kids Coding Hub",
  category: "education",
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: absoluteSiteUrl("/media/kids-coding-hub-logo.png"),
    shortcut: absoluteSiteUrl("/media/kids-coding-hub-logo.png"),
    apple: absoluteSiteUrl("/media/kids-coding-hub-logo.png"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
