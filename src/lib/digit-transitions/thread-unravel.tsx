"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { DIGIT_STROKE_PATHS } from "./digit-paths";

interface Props {
  value: number;
  size: number;
}

export function ThreadUnravel({ value, size }: Props) {
  const width = size;
  const height = size * 1.5;

  const [displayPath, setDisplayPath] = useState(DIGIT_STROKE_PATHS[value]);
  const prevValue = useRef(value);
  const progress = useMotionValue(1);

  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(300);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [displayPath]);

  useEffect(() => {
    if (prevValue.current === value) return;
    prevValue.current = value;

    animate(progress, 0, {
      duration: 0.25,
      ease: "easeIn",
      onComplete: () => {
        setDisplayPath(DIGIT_STROKE_PATHS[value]);
        progress.set(0);
        animate(progress, 1, {
          duration: 0.35,
          ease: "easeOut",
        });
      },
    });
  }, [value, progress]);

  const dashOffset = useTransform(progress, [0, 1], [pathLength, 0]);

  return (
    <svg width={width} height={height} viewBox="0 0 64 96">
      <motion.path
        ref={pathRef}
        d={displayPath}
        fill="none"
        stroke="#38bdf8"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        style={{ strokeDashoffset: dashOffset }}
      />
    </svg>
  );
}
