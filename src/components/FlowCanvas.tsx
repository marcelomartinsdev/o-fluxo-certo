"use client";

import { useEffect, useRef } from "react";

type Candle = {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  delay: number;
};

export function FlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const canvasElement: HTMLCanvasElement = canvas;
    const drawingContext: CanvasRenderingContext2D = context;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let pointerX = 0.62;
    let pointerY = 0.35;
    let candles: Candle[] = [];

    function buildCandles() {
      candles = Array.from({ length: 42 }, (_, index) => {
        const wave = Math.sin(index * 0.47) * 0.1;
        const climb = index / 120;
        const open = 0.78 - climb + wave;
        const movement = Math.sin(index * 1.31) * 0.055;
        const close = open + movement;
        return {
          x: index / 41,
          open,
          close,
          high: Math.min(open, close) - 0.045 - (index % 3) * 0.008,
          low: Math.max(open, close) + 0.04 + (index % 4) * 0.006,
          delay: index * 0.045,
        };
      });
    }

    function resize() {
      const rect = canvasElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvasElement.width = Math.round(width * dpr);
      canvasElement.height = Math.round(height * dpr);
      drawingContext.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(time = 0) {
      const seconds = time / 1000;
      drawingContext.clearRect(0, 0, width, height);

      const glowX = pointerX * width;
      const glowY = pointerY * height;
      const glow = drawingContext.createRadialGradient(
        glowX,
        glowY,
        0,
        glowX,
        glowY,
        Math.max(width, height) * 0.42,
      );
      glow.addColorStop(0, "rgba(21,229,117,0.08)");
      glow.addColorStop(1, "rgba(21,229,117,0)");
      drawingContext.fillStyle = glow;
      drawingContext.fillRect(0, 0, width, height);

      drawingContext.strokeStyle = "rgba(167,176,170,0.075)";
      drawingContext.lineWidth = 1;
      for (let row = 1; row < 6; row += 1) {
        const y = (height / 6) * row;
        drawingContext.beginPath();
        drawingContext.moveTo(width * 0.34, y);
        drawingContext.lineTo(width, y);
        drawingContext.stroke();
      }

      const left = width * 0.31;
      const usableWidth = width * 0.74;
      const candleWidth = Math.max(3, usableWidth / candles.length / 3.2);

      candles.forEach((candle, index) => {
        const reveal = reduceMotion
          ? 1
          : Math.max(0, Math.min(1, (seconds - candle.delay) * 1.8));
        const pulse = reduceMotion ? 0 : Math.sin(seconds * 1.4 + index) * 0.003;
        const x = left + candle.x * usableWidth;
        const openY = (candle.open + pulse) * height;
        const closeY = (candle.close + pulse) * height;
        const highY = candle.high * height;
        const lowY = candle.low * height;
        const rising = closeY < openY;
        const color = rising ? "rgba(21,229,117,0.28)" : "rgba(167,176,170,0.15)";

        drawingContext.strokeStyle = color;
        drawingContext.fillStyle = color;
        drawingContext.lineWidth = 1;
        drawingContext.beginPath();
        drawingContext.moveTo(x, lowY);
        drawingContext.lineTo(x, lowY + (highY - lowY) * reveal);
        drawingContext.stroke();

        const bodyTop = Math.min(openY, closeY);
        const bodyHeight = Math.max(2, Math.abs(closeY - openY) * reveal);
        drawingContext.fillRect(
          x - candleWidth / 2,
          bodyTop,
          candleWidth,
          bodyHeight,
        );
      });

      drawingContext.beginPath();
      drawingContext.lineWidth = 1.4;
      drawingContext.strokeStyle = "rgba(21,229,117,0.48)";
      candles.forEach((candle, index) => {
        const x = left + candle.x * usableWidth;
        const y = (candle.close - 0.03) * height;
        if (index === 0) drawingContext.moveTo(x, y);
        else drawingContext.lineTo(x, y);
      });
      drawingContext.stroke();

      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    }

    function handlePointer(event: PointerEvent) {
      pointerX = event.clientX / window.innerWidth;
      pointerY = event.clientY / window.innerHeight;
    }

    buildCandles();
    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", handlePointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="flow-canvas" aria-hidden="true" />;
}
