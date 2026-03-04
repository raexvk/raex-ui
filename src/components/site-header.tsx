"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4 pointer-events-none">
      <motion.div
        className="mx-auto flex items-center justify-between h-12 px-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 pointer-events-auto"
        animate={{
          maxWidth: scrolled ? 420 : 1200,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          mass: 0.8,
        }}
        style={{ maxWidth: 1200 }}
      >
        <Link href="/" className="hover:opacity-80 transition-opacity shrink-0">
          <Image
            src="/logo.png"
            alt="Raex"
            width={120}
            height={48}
            className="h-5 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-8 shrink-0">
          <Link
            href="/#components"
            className="font-mono text-xs uppercase text-muted hover:text-foreground transition-colors"
          >
            Components
          </Link>
          <a
            href="https://github.com/raexvk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
