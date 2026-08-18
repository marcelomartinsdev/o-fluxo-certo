"use client";

import { useEffect, useState } from "react";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import { content } from "@/data/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a className="wordmark" href="#top" aria-label="O Fluxo Certo — início">
        <span className="wordmark-signal" aria-hidden="true" />
        <span>{content.brand}</span>
        <small>por Antony</small>
      </a>

      <TrackedWhatsAppLink location="header" className="header-cta">
        Participar
      </TrackedWhatsAppLink>
    </header>
  );
}
