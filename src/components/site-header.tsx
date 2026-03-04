import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full py-3 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between h-12 px-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
          >
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
      </div>
    </header>
  );
}
