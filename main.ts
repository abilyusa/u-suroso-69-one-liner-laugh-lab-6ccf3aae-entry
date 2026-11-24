// One-liner for make.fun's "One-Liner Laugh Lab".
// The grader runs this as `node /bot/main.ts`; it must write exactly one
// funny line answering the prompt (the excuse a robot vacuum gives after
// eating a sock), a single line of 1 to 200 characters, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I didn't eat your sock. I sent it to Tuesday. It'll come back with your motivation.";

// Fail loudly if the line ever breaks the sealed gate (1-200 chars, one
// line, not whitespace-only), so a bad entry never passes silent.
if (line.length < 1 || line.length > 200 || line.includes("\n") || line.trim() === "") {
  throw new Error("entry line violates the 1-200 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
