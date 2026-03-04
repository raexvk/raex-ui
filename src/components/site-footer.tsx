import Link from "next/link";
import { COMPONENTS } from "@/lib/registry";

export function SiteFooter() {
  return (
    <footer className="mt-[var(--space-xl)]">
      <div className="rule" />
      <div className="container-main py-[var(--space-lg)]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-mono text-xs tracking-wider text-[var(--color-text-muted)]">
              [ raex ui ]
            </span>
            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              Animated React components for interfaces that feel alive.
            </p>
          </div>

          {/* Component links */}
          <div>
            <span className="bracket-label block mb-3">[ Components ]</span>
            <ul className="space-y-2">
              {COMPONENTS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/components/${c.slug}`}
                    className="font-mono text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Built with */}
          <div>
            <span className="bracket-label block mb-3">[ Built with ]</span>
            <ul className="space-y-2 font-mono text-xs text-[var(--color-text-secondary)]">
              <li>React 19</li>
              <li>Framer Motion</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>

        <div className="rule mt-10 mb-6" />
        <div className="flex items-center justify-between">
          <span className="font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">
            &copy; {new Date().getFullYear()} raex
          </span>
          <span className="font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">
            MIT License
          </span>
        </div>
      </div>
    </footer>
  );
}
