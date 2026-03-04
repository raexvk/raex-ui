export function Plus({ className = "" }: { className?: string }) {
  return (
    <span className={`plus ${className}`} aria-hidden>
      +
    </span>
  );
}

export function Rule({ strong = false, className = "" }: { strong?: boolean; className?: string }) {
  return <div className={`${strong ? "rule--strong" : "rule"} ${className}`} />;
}

export function RuleDotted({ className = "" }: { className?: string }) {
  return <div className={`rule-dotted ${className}`} />;
}

export function BracketLabel({
  children,
  accent = false,
  className = "",
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <span className={`bracket-label ${accent ? "bracket-label--accent" : ""} ${className}`}>
      [ {children} ]
    </span>
  );
}
