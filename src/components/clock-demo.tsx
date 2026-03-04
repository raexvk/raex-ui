"use client";

import { useState, useEffect } from "react";
import { COMPONENT_MAP } from "@/lib/registry";

function Colon({ size }: { size: number }) {
  const dotSize = Math.max(size * 0.1, 3);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20%",
        width: size * 0.3,
        height: size * 1.5,
      }}
    >
      <div
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          backgroundColor: "#525252",
        }}
      />
      <div
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          backgroundColor: "#525252",
        }}
      />
    </div>
  );
}

export function ClockDemo({
  variant,
  size = 48,
}: {
  variant: string;
  size?: number;
}) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const Component = COMPONENT_MAP[variant];

  const digits = [
    parseInt(hours[0]),
    parseInt(hours[1]),
    -1,
    parseInt(minutes[0]),
    parseInt(minutes[1]),
    -1,
    parseInt(seconds[0]),
    parseInt(seconds[1]),
  ];

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {digits.map((d, i) =>
        d === -1 ? (
          <Colon key={`colon-${i}`} size={size} />
        ) : (
          <Component key={i} value={d} size={size} />
        )
      )}
    </div>
  );
}
