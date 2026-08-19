"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export function MotionProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const compactViewport = window.matchMedia("(max-width: 820px)").matches;
    const captureMode = new URLSearchParams(window.location.search).has(
      "capture",
    );
    const supportsIntersectionObserver = "IntersectionObserver" in window;
    const enableRevealMotion =
      !reduceMotion &&
      !compactViewport &&
      !captureMode &&
      supportsIntersectionObserver;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    let revealObserver: IntersectionObserver | null = null;

    if (enableRevealMotion) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px 12%", threshold: 0.04 },
      );

      revealElements.forEach((element) => revealObserver?.observe(element));
      root.classList.add("motion-ready");
    } else {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    const trackedSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-track-view]"),
    );
    const trackObserver = supportsIntersectionObserver
      ? new IntersectionObserver(
          (entries, observer) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const event = (entry.target as HTMLElement).dataset.trackView;
              if (event) trackEvent(event);
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.35 },
        )
      : null;

    trackedSections.forEach((element) => trackObserver?.observe(element));

    const stickyCta = document.querySelector<HTMLElement>(".mobile-sticky-cta");
    const hero = document.querySelector<HTMLElement>(".hero");
    const finalSection = document.querySelector<HTMLElement>(".final-section");

    const updateStickyCta = () => {
      if (!stickyCta || !hero) return;
      const beyondHero = window.scrollY > hero.offsetHeight * 0.68;
      const finalIsNear = finalSection
        ? finalSection.getBoundingClientRect().top < window.innerHeight * 0.82
        : false;
      stickyCta.classList.toggle("is-visible", beyondHero && !finalIsNear);
    };

    updateStickyCta();
    window.addEventListener("scroll", updateStickyCta, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      revealObserver?.disconnect();
      trackObserver?.disconnect();
      window.removeEventListener("scroll", updateStickyCta);
    };
  }, []);

  return null;
}
