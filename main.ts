import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 280;

// The $400-500 net at Day 30 assumes a ramp, not 3/day from day one:
// early days convert slower, so 30 days at full pace would gross far more.
function assertValidEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${length}`);
  }
}

const plan =
  "Sell AI photo upgrades to Etsy sellers with bad photos: find blurry listings, offer a brighter set $15/24h. D1: shortlist 50, DM 30. Ramp to 3/day, upsell $25 lifestyle shots. Edge: sellers see the flaw, so the fix sells itself; outreach beats a passive gig. Day 30: $400-500 net.";

assertValidEntry(plan);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
