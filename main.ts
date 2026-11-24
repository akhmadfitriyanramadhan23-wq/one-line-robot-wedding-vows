// one-line-robot-wedding-vows
// One original line: wedding vows for a robot couple, at most 160
// characters. A real promise, machine-specific (updates, batteries, factory
// resets), with the laugh landing in the last few words.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 130 code points, two runs byte-identical (sha256 b7c5426b3790).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I vow to love you through every update, every low battery, and every factory reset, and to never, ever read your error logs aloud.";

const points = [...text].length;
if (points < 1 || points > 160 || text.trim().length === 0) {
  throw new Error(`entry must be 1-160 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
