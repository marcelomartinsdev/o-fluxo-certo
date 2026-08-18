"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { proofItems } from "@/data/content";

export function ProofGallery() {
  const railRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogOpenerRef = useRef<HTMLButtonElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    let focusFrame: number | undefined;

    if (dialogOpen && !dialog.open) {
      dialog.showModal();
      focusFrame = window.requestAnimationFrame(() => {
        dialog.querySelector<HTMLButtonElement>(".dialog-close")?.focus();
      });
    }
    if (!dialogOpen && dialog.open) dialog.close();
    if (!dialogOpen) dialogOpenerRef.current?.focus();

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !dialogOpen) return;
      event.preventDefault();
      setDialogOpen(false);
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => {
      if (focusFrame !== undefined) window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [dialogOpen]);

  function move(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: rail.clientWidth * 0.82 * direction,
      behavior: "smooth",
    });
  }

  function openItem(index: number, opener: HTMLButtonElement) {
    dialogOpenerRef.current = opener;
    setSelectedIndex(index);
    setDialogOpen(true);
  }

  const selected = proofItems[selectedIndex];

  return (
    <>
      <div className="proof-controls" aria-label="Controles dos registros técnicos">
        <button type="button" onClick={() => move(-1)} aria-label="Registro anterior">
          <ChevronLeft aria-hidden="true" />
        </button>
        <span>Arraste para explorar</span>
        <button type="button" onClick={() => move(1)} aria-label="Próximo registro">
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="proof-rail" ref={railRef}>
        {proofItems.map((item, index) => (
          <article className="proof-slide" key={item.src}>
            <div className="proof-frame">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 88vw, 68vw"
                className="proof-image"
              />
              <button
                className="proof-expand"
                type="button"
                onClick={(event) => openItem(index, event.currentTarget)}
                aria-label={`Ampliar ${item.title}`}
              >
                <Expand aria-hidden="true" />
              </button>
              <div className="proof-scanline" aria-hidden="true" />
            </div>
            <div className="proof-caption">
              <span className="proof-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="proof-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="proof-dialog"
        aria-labelledby="proof-dialog-title"
        aria-describedby="proof-dialog-description"
        aria-modal="true"
        onClose={() => setDialogOpen(false)}
        onCancel={() => setDialogOpen(false)}
      >
        <form method="dialog">
          <button
            className="dialog-close"
            type="submit"
            aria-label="Fechar ampliação"
            autoFocus
          >
            <X aria-hidden="true" />
          </button>
        </form>
        <div className="dialog-image">
          <Image
            src={selected.src}
            alt={selected.alt}
            fill
            sizes="95vw"
            className="proof-image"
          />
        </div>
        <div className="dialog-caption">
          <span>{selected.label}</span>
          <strong id="proof-dialog-title">{selected.title}</strong>
          <p id="proof-dialog-description" className="sr-only">
            {selected.description}
          </p>
        </div>
      </dialog>
    </>
  );
}
