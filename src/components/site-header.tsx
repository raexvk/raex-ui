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
            alt="Raex"
            width={120}
            height={48}
            className="h-6 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/#components"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Components
          </Link>
          <a
            href="https://github.com/raexvk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
