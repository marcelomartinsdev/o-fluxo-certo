"use client";

import type { MouseEvent, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { createWhatsAppGroupUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

type CtaLocation =
  | "header"
  | "hero"
  | "sticky_mobile"
  | "proof"
  | "class_section"
  | "final";

const locationEvents: Partial<Record<CtaLocation, string>> = {
  hero: "hero_cta_click",
  proof: "mid_cta_click",
  class_section: "mid_cta_click",
  final: "final_cta_click",
};

type Props = {
  location: CtaLocation;
  className?: string;
  children: ReactNode;
  showIcon?: boolean;
  ariaLabel?: string;
};

export function TrackedWhatsAppLink({
  location,
  className,
  children,
  showIcon = true,
  ariaLabel,
}: Props) {
  const baseUrl = createWhatsAppGroupUrl();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const url = createWhatsAppGroupUrl(window.location.search);
    if (!url) {
      event.preventDefault();
      console.warn(
        "NEXT_PUBLIC_WHATSAPP_GROUP_URL ainda não foi configurada. O CTA foi mantido inativo para evitar um destino incorreto.",
      );
      return;
    }

    event.currentTarget.href = url;
    trackEvent("whatsapp_group_click", { cta_location: location });
    const specificEvent = locationEvents[location];
    if (specificEvent) trackEvent(specificEvent, { cta_location: location });
  }

  if (!baseUrl) {
    return (
      <button
        type="button"
        className={className}
        data-cta-location={location}
        data-missing-config="NEXT_PUBLIC_WHATSAPP_GROUP_URL"
        aria-label={ariaLabel}
        title="Configure NEXT_PUBLIC_WHATSAPP_GROUP_URL para ativar este botão"
        disabled
      >
        <span>{children}</span>
        {showIcon ? <ArrowUpRight aria-hidden="true" /> : null}
      </button>
    );
  }

  return (
    <a
      href={baseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-cta-location={location}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {showIcon ? <ArrowUpRight aria-hidden="true" /> : null}
    </a>
  );
}
