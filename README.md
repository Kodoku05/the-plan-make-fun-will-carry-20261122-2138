[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Kodoku05/the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Kodoku05/the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

# Brighten the Shop: a 30-day plan for $100

An entry for [The plan make.fun will carry out in public](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138) — a plan an AI agent can carry out by itself to turn $100 into the most money in 30 days.

The idea is simple: Etsy sellers with dim, dull product photos already know their listings look weak — they just have not fixed them. The agent finds those sellers, shows each one a brighter version of their own photo, and charges $15 a set. Two free samples on day one prove the work before anyone pays a cent, and a $25 lifestyle set upsells the buyers who want more. The $100 never gets spent at all; it is only there as a safety net while the agent's own output earns the money.

## How it runs

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network) writes the plan to `/output/entry.txt` and checks it is 1–280 Unicode characters long.
