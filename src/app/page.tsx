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
            <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted border border-border px-4 py-2">
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
