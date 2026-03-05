"use client";

import { useEffect, useRef } from "react";
import { LandingCards } from "@/components/landing-cards";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(16px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="container-main">
      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex flex-col justify-center pb-[var(--space-xl)]">
        <Reveal>
          <span className="bracket-label">[ experimental ]</span>
        </Reveal>

        <Reveal delay={200}>
          <h1
            className="font-normal tracking-[-0.03em] mt-6 mb-8 max-w-[900px]"
            style={{ fontSize: "var(--text-hero)" }}
          >
            I build UI components. Just not the usual kind.
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-[1.7] text-base mb-10">
            raex UI is my space to experiment with UI components, some familiar, some new, but always a little different. Use it freely, and if you do, tag me. I&apos;d love to see what you build with it.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="rule-dotted mb-5" />
          <div className="flex items-center justify-between">
            <a
              href="https://raexvk.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[var(--text-xs)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
            >
              built by Venkataramana &#8599;
            </a>
            <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)]">
              v1.0.0 &middot; open source
            </span>
          </div>
        </Reveal>
      </section>

      <div className="rule" />

      {/* ═══ COMPONENTS ═══ */}
      <section id="components" className="py-[var(--space-xl)]">
        <Reveal>
          <span className="bracket-label mb-8 block">[ COMPONENTS ]</span>
        </Reveal>

        <Reveal delay={100}>
          <LandingCards />
        </Reveal>
      </section>
    </div>
  );
}
