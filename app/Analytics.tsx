"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "kch_analytics_consent";
type ConsentChoice = "accepted" | "declined";

function loadGoogleAnalytics(measurementId: string) {
  if (document.querySelector(`script[data-kch-ga="${measurementId}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.kchGa = measurementId;
  document.head.appendChild(script);

  const analyticsWindow = window as typeof window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = (...args: unknown[]) => {
    analyticsWindow.dataLayer?.push(args);
  };
  analyticsWindow.gtag("js", new Date());
  analyticsWindow.gtag("config", measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

export default function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setLanguage(document.documentElement.lang === "en" ? "en" : "ar");
      const stored = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
      setChoice(stored);
      if (stored === "accepted" && measurementId) loadGoogleAnalytics(measurementId);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [measurementId]);

  function choose(nextChoice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    if (nextChoice === "accepted" && measurementId) loadGoogleAnalytics(measurementId);
  }

  if (!measurementId || choice !== null) return null;

  const ar = language === "ar";
  return (
    <aside className="analytics-consent" dir={ar ? "rtl" : "ltr"} aria-label={ar ? "إعدادات الخصوصية" : "Privacy settings"}>
      <div>
        <strong>{ar ? "نحترم خصوصيتك" : "Your privacy matters"}</strong>
        <p>
          {ar
            ? "نستخدم قياسًا مجمّعًا لفهم الصفحات والأزرار التي تساعد الأهالي. لا نرسل أسماء الأطفال أو أرقام الهواتف أو نصوص WhatsApp. يمكنكِ الرفض أو الموافقة."
            : "We use aggregated analytics to understand which pages and buttons help parents. We do not send children’s names, phone numbers, or WhatsApp text. You can accept or decline."}
        </p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" className="analytics-consent-accept" onClick={() => choose("accepted")}>
          {ar ? "السماح بالقياس" : "Allow analytics"}
        </button>
        <button type="button" className="analytics-consent-decline" onClick={() => choose("declined")}>
          {ar ? "لا أوافق" : "Decline"}
        </button>
      </div>
    </aside>
  );
}
