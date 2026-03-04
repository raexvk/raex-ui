export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-text-muted)] ${className}`}
    >
      [ {children} ]
    </span>
  );
}
