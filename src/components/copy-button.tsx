"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 font-mono text-[var(--text-xxs)] uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150 z-10"
      aria-label="Copy code"
    >
      {copied ? "[ copied ]" : "[ copy ]"}
    </button>
  );
}
