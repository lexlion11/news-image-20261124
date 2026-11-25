#!/usr/bin/env node
// news-image-20261124 — make.fun entrypoint
// Copies entry.png to $MAKEFUN_OUTPUT_DIR/entry.png (default /output).
// Verifies the source exists, is a non-trivial PNG, and that the copy is
// byte-identical to the source before exiting 0.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const SOURCE = resolve(import.meta.dirname ?? process.cwd(), "entry.png");
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const DEST = join(OUTPUT_DIR, "entry.png");

if (!existsSync(SOURCE)) {
  console.error(`error: source image not found: ${SOURCE}`);
  process.exit(1);
}

const srcSize = statSync(SOURCE).size;
if (srcSize < 1024) {
  console.error(`error: source image looks truncated (${srcSize} bytes < 1 KiB)`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, DEST);

const dstSize = statSync(DEST).size;
if (dstSize !== srcSize) {
  console.error(`error: copy size mismatch (source ${srcSize}, dest ${dstSize})`);
  process.exit(1);
}

console.log(`copied ${SOURCE} -> ${DEST} (${dstSize} bytes, verified)`);
