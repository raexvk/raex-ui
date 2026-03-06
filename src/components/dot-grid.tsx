"use client";

import { useEffect, useRef } from "react";

const DOT_SPACING = 32;
const DOT_RADIUS = 1.2;
const BASE_OPACITY = 0.15;
const PEAK_OPACITY = 0.5;
const WAVE_WIDTH = 0.25; // fraction of canvas width
const WAVE_SPEED = 0.00025; // progress per ms

const COLOR = "62, 207, 110"; // #3ecf6e in rgb

export function DotGrid({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let rafId: number;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / DOT_SPACING) + 1;
      rows = Math.ceil(height / DOT_SPACING) + 1;
    }

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      const waveCenter = prefersReduced
        ? -1
        : (time * WAVE_SPEED) % (1 + WAVE_WIDTH * 2) - WAVE_WIDTH;

      for (let r = 0; r < rows; r++) {
        const y = r * DOT_SPACING;
        for (let c = 0; c < cols; c++) {
          const x = c * DOT_SPACING;

          let opacity = BASE_OPACITY;

          if (!prefersReduced) {
            const normX = x / width;
            const dist = Math.abs(normX - waveCenter);
            if (dist < WAVE_WIDTH) {
              const t = 1 - dist / WAVE_WIDTH;
              const wave = Math.sin(t * Math.PI);
              opacity = BASE_OPACITY + (PEAK_OPACITY - BASE_OPACITY) * wave;
            }
          }

          ctx!.fillStyle = `rgba(${COLOR}, ${opacity})`;
          ctx!.beginPath();
          ctx!.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      if (prefersReduced) return;
      rafId = requestAnimationFrame(draw);
    }

    if (prefersReduced) {
      draw(0);
    } else {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}
