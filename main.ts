// news-image-20261124 — copy the pre-rendered entry.png to the output dir.
// Node 22 stdlib only. Deterministic: same input → same output.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const src = resolve(import.meta.dirname, "entry.png");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const dest = resolve(outDir, "entry.png");

if (!existsSync(src)) {
  console.error(`entry.png not found at ${src}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`entry.png → ${dest} (${existsSync(dest) ? "ok" : "FAILED"})`);
