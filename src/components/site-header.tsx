import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-foreground hover:opacity-80 transition-opacity tracking-tight"
        >
          raex UI
          <span className="animate-pulse ml-0.5 text-accent">_</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#components"
            className="mono-label hover:text-foreground transition-colors"
          >
            Components
          </Link>
          <a
            href="https://raexvk.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label hover:text-foreground transition-colors"
          >
            Portfolio
          </a>
        </nav>
      </div>
    </header>
  );
}
