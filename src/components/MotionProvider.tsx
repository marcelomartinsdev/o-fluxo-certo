"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export function MotionProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const captureMode = new URLSearchParams(window.location.search).has(
      "capture",
    );

    if (!reduceMotion && !captureMode) root.classList.add("motion-ready");

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    if (captureMode) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealElements.forEach((element) => revealObserver.observe(element));
    }

    const trackedSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-track-view]"),
    );
    const trackObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const event = (entry.target as HTMLElement).dataset.trackView;
          if (event) trackEvent(event);
          trackObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.35 },
    );

    trackedSections.forEach((element) => trackObserver.observe(element));

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
      revealObserver.disconnect();
      trackObserver.disconnect();
      window.removeEventListener("scroll", updateStickyCta);
    };
  }, []);

  return null;
}
