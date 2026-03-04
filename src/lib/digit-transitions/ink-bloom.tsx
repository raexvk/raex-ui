"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DIGIT_PATHS } from "./digit-paths";

interface Props {
  value: number;
  size: number;
}

export function InkBloom({ value, size }: Props) {
  const width = size;
  const height = size * 1.5;
  const [key, setKey] = useState(0);

  const prevValue = useRef(value);
  useEffect(() => {
    if (prevValue.current !== value) {
      prevValue.current = value;
      setKey((k) => k + 1);
    }
  }, [value]);

  return (
    <svg width={width} height={height} viewBox="0 0 64 96" style={{ overflow: "visible" }}>
      <AnimatePresence mode="popLayout">
        <motion.g
          key={`${value}-${key}`}
          initial={{
            opacity: 0,
            filter: "blur(12px)",
            scale: 1.3,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
          }}
          exit={{
            opacity: 0,
            filter: "blur(16px)",
            scale: 1.5,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "32px 48px" }}
        >
          <path d={DIGIT_PATHS[value]} fill="#c084fc" />
        </motion.g>
      </AnimatePresence>
    </svg>
  );
}
