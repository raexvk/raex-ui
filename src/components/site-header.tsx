import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]">
      <div className="container-main flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-mono text-sm tracking-wider text-[#3ecf6e] hover:text-[#3ecf6e] transition-colors duration-150"
        >
          RAEX UI
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/#components"
            className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
          >
            Components
          </Link>
          <a
            href="https://github.com/raexvk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
          >
            GitHub
          </a>
        </nav>
      </div>
      <div className="rule" />
    </header>
  );
}
