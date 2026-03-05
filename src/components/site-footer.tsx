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
            <span className="font-mono text-sm tracking-wider text-[#3ecf6e]">
              RAEX UI
            </span>
            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              Experimenting with UI. Just not the usual kind.
            </p>
          </div>

          {/* Component links */}
          <div>
            <span className="bracket-label block mb-4">[ Components ]</span>
            <ul className="space-y-2.5">
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

          {/* Credit */}
          <div>
            <a
              href="https://www.linkedin.com/in/venkataramanab/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
            >
              Built by Venkataramana &#8599;
            </a>
          </div>
        </div>

        <div className="rule mt-10 mb-6" />
        <span className="font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">
          MIT License &middot; 2026
        </span>
      </div>
    </footer>
  );
}
