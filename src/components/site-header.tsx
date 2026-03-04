import Link from "next/link";
import { Package } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground hover:opacity-80 transition-opacity">
          <Package className="w-5 h-5" />
          <span className="font-mono text-sm">animated-digit-transitions</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link href="/components/particle-scatter" className="hover:text-foreground transition-colors">
            Components
          </Link>
          <a
            href="https://www.npmjs.com/package/animated-digit-transitions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            npm
          </a>
          <a
            href="https://github.com/venkataramanab/animated-digit-transitions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
