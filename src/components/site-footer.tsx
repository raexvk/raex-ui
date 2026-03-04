import Link from "next/link";
import { COMPONENTS } from "@/lib/registry";

export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="dotted-line" />
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-mono text-sm font-medium text-foreground">
              raex UI
            </span>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              A growing collection of beautifully crafted React components.
              Animated, interactive, production-ready.
            </p>
          </div>

          {/* Component links */}
          <div>
            <span className="mono-label mb-3 block">Components</span>
            <ul className="space-y-2">
              {COMPONENTS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/components/${c.slug}`}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Built with */}
          <div>
            <span className="mono-label mb-3 block">Built with</span>
            <ul className="space-y-2 text-sm text-muted">
              <li>React 19</li>
              <li>Framer Motion</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="dotted-line mt-10 pt-6 flex items-center justify-between">
          <span className="mono-label">&copy; {new Date().getFullYear()} raex</span>
          <span className="mono-label">MIT License</span>
        </div>
      </div>
    </footer>
  );
}
