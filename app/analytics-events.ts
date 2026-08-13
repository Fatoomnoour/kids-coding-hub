export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

function getAnalyticsWindow() {
  if (typeof window === "undefined") return null;
  return window as AnalyticsWindow;
}

function cleanParams(params: AnalyticsParams) {
  return Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));
}

export function trackAnalyticsEvent(name: string, params: AnalyticsParams = {}) {
  const analyticsWindow = getAnalyticsWindow();
  analyticsWindow?.gtag?.("event", name, cleanParams(params));
}

export function trackWhatsAppClick(
  source: string,
  params: AnalyticsParams = {},
) {
  trackAnalyticsEvent("whatsapp_click", {
    cta_location: source,
    ...params,
  });
}

export function trackPathFinderEvent(
  name: "path_finder_started" | "path_finder_completed",
  params: AnalyticsParams = {},
) {
  trackAnalyticsEvent(name, params);
}
