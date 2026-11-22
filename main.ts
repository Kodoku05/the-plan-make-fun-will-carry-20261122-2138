import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 280;

// The $400-500 net at Day 30 assumes a ramp, not 3/day from day one:
// early days convert slower, so 30 days at full pace would gross far more.
// The $100 is never spent: worst case the plan ends with the stake intact.
function countChars(text: string): number {
  return [...text].length;
}

function assertValidEntry(text: string): void {
  const length = countChars(text);
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

const plan =
  "Sell AI photo upgrades to Etsy sellers: search, shortlist 50, DM 30, offer sharper sets $15/24h. D1: 2 free samples; paid order by D2 proves demand. Ramp to 3/day, upsell $25 lifestyle sets. Edge: sellers see the flaw, so the fix sells itself. Day 30: $400-500 net, $100 unspent.";

assertValidEntry(plan);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
