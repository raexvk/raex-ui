"use client";

import { useEffect, useRef } from "react";
import { HeroClock } from "@/components/hero-clock";
import { LandingCards } from "@/components/landing-cards";
import { CopyButton } from "@/components/copy-button";
import { COMPONENTS } from "@/lib/registry";

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

const installCommand = "npm install animated-digit-transitions";

export default function Home() {
  return (
    <div className="container-main">
      {/* Hero */}
      <section className="pt-[var(--space-2xl)] pb-[var(--space-xl)]">
        <Reveal>
          <span className="bracket-label">[ open source ]</span>
        </Reveal>

        <Reveal delay={200}>
          <h1
            className="font-light tracking-[-0.03em] mt-6 mb-6"
            style={{ fontSize: "var(--text-hero)" }}
          >
            raex UI
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p
            className="text-[var(--color-text-secondary)] max-w-xl leading-[1.7]"
            style={{ fontSize: "var(--text-base)" }}
          >
            Animated React components for interfaces that feel alive. Zero external dependencies. Ships under 3kb each.
          </p>
        </Reveal>

        <Reveal delay={500} className="mt-3">
          <p className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)]">
            Framer Motion &middot; TypeScript &middot; MIT
          </p>
        </Reveal>

        {/* Install command */}
        <Reveal delay={600} className="mt-10 max-w-lg">
          <div className="relative border border-[var(--color-line-strong)] bg-[var(--color-bg-subtle)]">
            <CopyButton text={installCommand} />
            <pre className="p-[var(--space-md)] text-sm font-mono terminal-prompt">
              <code>{installCommand}</code>
            </pre>
          </div>
        </Reveal>

        {/* Hero clock */}
        <Reveal delay={800} className="mt-16 max-w-2xl">
          <HeroClock />
        </Reveal>

        <Reveal delay={900} className="mt-8">
          <a
            href="https://raexvk.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
          >
            built by raex
          </a>
        </Reveal>
      </section>

      <div className="rule" />

      {/* Components catalog */}
      <section id="components" className="py-[var(--space-xl)]">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="bracket-label">[ Components ]</span>
            <span className="mono-counter">{COMPONENTS.length} variants</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="font-normal mb-3"
            style={{ fontSize: "var(--text-xl)" }}
          >
            Digital Clock Animations
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[var(--color-text-secondary)] text-sm mb-10 max-w-lg">
            The first collection. Four digit transition components, each with a distinct animation approach.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <LandingCards />
        </Reveal>
      </section>

      <div className="rule" />

      {/* Stats */}
      <section className="py-[var(--space-xl)]">
        <Reveal>
          <span className="bracket-label">[ At a glance ]</span>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-[var(--color-line)] mt-8">
          {[
            { value: "4", suffix: "+", label: "Components" },
            { value: "TS", suffix: "", label: "TypeScript" },
            { value: "<3kb", suffix: "", label: "Each" },
            { value: "0", suffix: "", label: "Deps" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="bg-[var(--color-bg)] p-[var(--space-md)]">
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-light"
                    style={{ fontSize: "var(--text-xl)", color: "var(--color-text-primary)" }}
                  >
                    {item.value}
                  </span>
                  {item.suffix && (
                    <span className="font-mono text-[var(--text-xs)] text-[var(--color-accent)]">
                      {item.suffix}
                    </span>
                  )}
                </div>
                <span className="font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider mt-1 block">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* CTA */}
      <section className="py-[var(--space-xl)]">
        <Reveal>
          <span className="bracket-label">[ Install ]</span>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="font-normal mt-6 mb-3"
            style={{ fontSize: "var(--text-xl)" }}
          >
            Get started
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[var(--color-text-secondary)] text-sm mb-8 max-w-md">
            Install the package. Import any component. That&apos;s it.
          </p>
        </Reveal>

        <Reveal delay={300} className="max-w-lg">
          <div className="relative border border-[var(--color-line-strong)] bg-[var(--color-bg-subtle)]">
            <CopyButton text={installCommand} />
            <pre className="p-[var(--space-md)] text-sm font-mono terminal-prompt">
              <code>{installCommand}</code>
            </pre>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
