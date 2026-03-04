export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-mono text-[10px] text-border select-none leading-none ${className}`}
      aria-hidden
    >
      +
    </span>
  );
}

export function DottedDivider({ className = "" }: { className?: string }) {
  return <div className={`dotted-line w-full ${className}`} />;
}

export function SectionLabel({
  label,
  detail,
  className = "",
}: {
  label: string;
  detail?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Crosshair />
      <span className="mono-label whitespace-nowrap">{label}</span>
      {detail && (
        <span className="mono-label text-muted/50 whitespace-nowrap">
          {detail}
        </span>
      )}
      <div className="dotted-line flex-1" />
    </div>
  );
}
