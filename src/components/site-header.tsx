"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4">
      <div
        className={`mx-auto flex items-center justify-between h-12 px-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-500 ease-in-out ${
          scrolled ? "max-w-md" : "max-w-[1200px]"
        }`}
      >
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Raex"
            width={120}
            height={48}
            className="h-5 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-8">
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
      </div>
    </header>
  );
}
