"use client";

import type { ReactNode } from "react";
import { trackWhatsAppClick, type AnalyticsParams } from "./analytics-events";

type AnalyticsLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  source: string;
  params?: AnalyticsParams;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export default function AnalyticsLink({
  href,
  children,
  className,
  source,
  params,
  target = "_blank",
  rel = "noreferrer",
  ariaLabel,
}: AnalyticsLinkProps) {
  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppClick(source, params)}
    >
      {children}
    </a>
  );
}
