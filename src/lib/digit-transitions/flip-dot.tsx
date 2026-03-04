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

export function FlipDot({ value, size }: Props) {
  const width = size;
  const height = size * 1.5;
  const cellW = width / COLS;
  const cellH = height / ROWS;
  const dotRadius = Math.min(cellW, cellH) * 0.35;

  const matrix = DIGIT_MATRIX[value];

  const dots = useMemo(() => {
    const d: { x: number; y: number; active: boolean; delay: number }[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        d.push({
          x: c * cellW + cellW / 2,
          y: r * cellH + cellH / 2,
          active: matrix[r][c] === 1,
          delay: (r + c) * 0.025,
        });
      }
    }
    return d;
  }, [value, cellW, cellH, matrix]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ perspective: "200px" }}
    >
      {dots.map((dot, i) => (
        <motion.g
          key={i}
          initial={false}
          animate={{
            rotateY: dot.active ? 0 : 180,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            delay: dot.delay,
          }}
          style={{
            transformOrigin: `${dot.x}px ${dot.y}px`,
          }}
        >
          <circle
            cx={dot.x}
            cy={dot.y}
            r={dotRadius}
            fill={dot.active ? "#fbbf24" : "#292524"}
            stroke="#44403c"
            strokeWidth={0.5}
          />
          {dot.active && (
            <circle
              cx={dot.x}
              cy={dot.y}
              r={dotRadius * 0.5}
              fill="#fde68a"
              opacity={0.4}
            />
          )}
        </motion.g>
      ))}
    </svg>
  );
}
