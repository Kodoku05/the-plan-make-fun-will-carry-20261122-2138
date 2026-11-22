// Writes the 30-day money plan to /output/entry.txt and checks its length.
import { mkdirSync, writeFileSync } from "node:fs";

// One concrete offer an agent can run alone, priced and dated day by day.
// The edge: the buyer spots the defect herself before any pitch lands.
const plan = "Day 1: find 50 Etsy sellers with dim photos; offer a $15 AI-brightened set in 24h, 2 free samples to prove it. Days 2-30: message 30 sellers a day, upsell $25 lifestyle sets, close 3 a day at $15. Sellers see their own flaw, so they buy. $400-500 by day 30; $100 stays unspent.";

// Count Unicode code points the way the gate counts them.
function codePointCount(text: string): number {
  return [...text].length;
}

const size = codePointCount(plan);
if (size < 1 || size > 280) {
  throw new Error(`entry is ${size} characters, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
console.log(`wrote ${size} characters to /output/entry.txt`);
