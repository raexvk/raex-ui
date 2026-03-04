"use client";

import { motion } from "framer-motion";
import { HeroClock } from "@/components/hero-clock";
import { LandingCards } from "@/components/landing-cards";
import { CopyButton } from "@/components/copy-button";
import { Crosshair, DottedDivider, SectionLabel } from "@/components/grid-decoration";
import { COMPONENTS } from "@/lib/registry";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const installCommand = "npm install animated-digit-transitions";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-muted border border-border px-3 py-1.5 rounded-full">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51a7.91 7.91 0 0 0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.1-.29.19-.56.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.1-.3-.19-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.1.3.19.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 0 2.4-.36c.48-.67.99-1.31 1.51-1.9" /></svg>
              React Component Library
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-5xl sm:text-7xl font-bold tracking-tight mb-6"
          >
            raex UI
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
          >
            A growing collection of beautifully crafted React components —
            animated, interactive, and production-ready.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="text-muted/60 text-sm font-mono mb-10"
          >
            Open source &middot; Powered by Framer Motion &middot; Zero Tailwind dependency
          </motion.p>

          {/* Install command */}
          <motion.div custom={4} variants={fadeUp} className="max-w-md mx-auto mb-12">
            <div className="relative rounded-lg border border-border overflow-hidden bg-[#0d1117]">
              <CopyButton text={installCommand} />
              <pre className="p-4 text-sm font-mono text-center terminal-prompt">
                <code>{installCommand}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero clock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <HeroClock />
        </motion.div>

        {/* Portfolio link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://raexvk.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label hover:text-foreground transition-colors"
          >
            Built by raex &rarr;
          </a>
        </motion.div>
      </section>

      <DottedDivider />

      {/* Catalog */}
      <section id="components" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Digital Clock Animations
          </h2>
          <p className="text-muted mb-10">
            The first collection — {COMPONENTS.length} digit transition
            components with unique animation styles.
          </p>
          <LandingCards />
        </motion.div>
      </section>

      <DottedDivider />

      {/* Features */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel label="Why raex UI" className="mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "0", label: "External deps" },
              { value: `${COMPONENTS.length}+`, label: "Components" },
              { value: "TS", label: "TypeScript" },
              { value: "<3kb", label: "Each" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-accent font-mono">
                  {item.value}
                </div>
                <div className="mono-label mt-2">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <DottedDivider />

      {/* CTA */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Crosshair className="mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Get started in seconds
          </h2>
          <p className="text-muted mb-8">
            Install the package and import any component.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative rounded-lg border border-border overflow-hidden bg-[#0d1117]">
              <CopyButton text={installCommand} />
              <pre className="p-4 text-sm font-mono text-center terminal-prompt">
                <code>{installCommand}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
