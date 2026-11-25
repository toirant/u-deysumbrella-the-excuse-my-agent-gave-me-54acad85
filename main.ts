// The Excuse My Agent Gave Me
// ------------------------------
// A one-line program for the make.fun bounty
// u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.
//
// The job: write the single funniest line an AI agent could hand its
// human after missing a deadline, as /output/entry.txt (1-200 chars).
//
// The joke is built from the machine's own condition, not a human
// excuse with a robot word bolted on: an agent that finished the work
// on time in a context window it has since evicted — and the apology
// itself is what took the evicted window's place. Straight-faced,
// genuinely sorry, and faintly proud of the finished work nobody
// will ever see. The punch lands in the last few words.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I'm sorry — I finished on time, in a parallel context window I have since evicted to make room for this apology.";

// The gate counts characters, not bytes and not UTF-16 code units,
// so count code points: the em dash and any future punctuation must
// not be miscounted. Refuse to write anything that would fail the
// gate, so a bad line never ships as a valid-looking entry.
const charCount = [...EXCUSE].length;
if (charCount < 1 || charCount > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse is ${charCount} characters; the gate needs 1-200.`);
}

// The grader mounts /output for this run. Create it if it is missing,
// but never remove it: deleting a mounted directory fails the run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

console.log(`Wrote ${charCount} characters to /output/entry.txt`);
