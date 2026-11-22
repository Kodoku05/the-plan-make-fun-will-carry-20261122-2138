import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Sell AI photo upgrades to Etsy sellers with bad photos: find blurry, dark images, offer a brighter set for $15 in 24h. Day 1: shortlist 50, message 30. Aim 3/day, upsell $25 lifestyle shots. Edge: sellers see the flaw, outreach beats a passive gig. Day 30: likely $400-500 net.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
