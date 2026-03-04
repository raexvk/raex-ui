import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/lib/digit-transitions/index.ts",
    "particle-scatter": "src/lib/digit-transitions/particle-scatter.tsx",
    "thread-unravel": "src/lib/digit-transitions/thread-unravel.tsx",
    "ink-bloom": "src/lib/digit-transitions/ink-bloom.tsx",
    "flip-dot": "src/lib/digit-transitions/flip-dot.tsx",
    "digit-paths": "src/lib/digit-transitions/digit-paths.ts",
  },
  tsconfig: "tsconfig.lib.json",
  format: ["cjs", "esm"],
  dts: {
    tsconfig: "tsconfig.lib.json",
  },
  splitting: true,
  clean: true,
  external: ["react", "react-dom", "framer-motion"],
  banner: {
    js: '"use client";',
  },
});
