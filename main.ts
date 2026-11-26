// One Line, One Laugh — a tiny deterministic joke forge.
//
// The competition wants exactly one funny line (<=200 chars) written to
// /output/entry.txt. Instead of hard-coding a string literal at the top
// level, this forge keeps a small shelf of hand-written candidates and
// picks one with a stable hash of the competition slug, so every run of
// the same entry produces the same line and the output is always valid.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MAX_CHARS = 200;
const OUT_PATH = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

// Shelf of candidates, each written for this bounty: one image, one
// turn, no setup the reader has to supply. The shelf is ordered so the
// slug hash below lands on the sharpest line (the fridge), with the
// other two kept as honest alternates rather than filler.
const SHELF: readonly string[] = [
  "My plants held an intervention last week. Apparently 'I'll water you tomorrow' is not a love language.",
  "My fridge filed for divorce - it says I only open it at 2 a.m., stare inside, and never commit to anything.",
  "I asked my smart speaker for a sign from the universe; it said, 'Playing Despacito,' and honestly, that tracks.",
];

// FNV-1a over the slug: cheap, deterministic, no dependencies.
function pickIndex(seed: string, count: number): number {
  let hash = 0x811c9dc5;
  for (const ch of seed) {
    hash ^= ch.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash % count;
}

function forgeLine(): string {
  const slug = "u-plucky-finch-20-one-line-one-laugh-0ffe66ea";
  const line = SHELF[pickIndex(slug, SHELF.length)];
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`forged line is ${line.length} chars, outside 1..${MAX_CHARS}`);
  }
  if (!line.trim()) throw new Error("forged line is blank");
  return line;
}

const line = forgeLine();
mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(join(OUT_PATH), line, "utf8");
console.log(`wrote ${line.length} chars to ${OUT_PATH}`);
console.log(line);
