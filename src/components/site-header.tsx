import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="raex UI"
            width={80}
            height={24}
            className="h-5 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#components"
            className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted hover:text-foreground transition-colors"
          >
            Components
          </Link>
          <a
            href="https://github.com/raexvk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
