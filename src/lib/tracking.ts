type DataLayerValue = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerValue[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, payload: DataLayerValue = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
  window.gtag?.("event", event, payload);
  window.fbq?.("trackCustom", event, payload);
}
