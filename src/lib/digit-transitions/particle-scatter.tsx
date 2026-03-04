"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { DIGIT_MATRIX } from "./digit-paths";

interface Props {
  value: number;
  size: number;
}

const ROWS = 7;
const COLS = 5;

function getTargets(digit: number, cellW: number, cellH: number) {
  const matrix = DIGIT_MATRIX[digit];
  const targets: { x: number; y: number; active: boolean }[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      targets.push({
        x: c * cellW + cellW / 2,
        y: r * cellH + cellH / 2,
        active: matrix[r][c] === 1,
      });
    }
  }
  return targets;
}

export function ParticleScatter({ value, size }: Props) {
  const width = size;
  const height = size * 1.5;
  const cellW = width / COLS;
  const cellH = height / ROWS;
  const dotRadius = Math.min(cellW, cellH) * 0.3;

  const targets = useMemo(() => getTargets(value, cellW, cellH), [value, cellW, cellH]);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {targets.map((target, i) => (
        <motion.circle
          key={i}
          r={dotRadius}
          fill="#a3e635"
          initial={false}
          animate={{
            cx: target.x,
            cy: target.y,
            opacity: target.active ? 1 : 0,
            scale: target.active ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.8,
            delay: i * 0.008,
          }}
        />
      ))}
    </svg>
  );
}
