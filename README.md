# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/mochhidayah/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/mochhidayah/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

A tiny deterministic joke forge for the [One Line, One Laugh](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea) bounty on make.fun.

`main.ts` keeps a small shelf of hand-written one-liners and picks one with a
stable FNV-1a hash of the competition slug, then writes it to
`/output/entry.txt` (validated to 1–200 characters).

The line it writes:

> My fridge filed for divorce - it says I only open it at 2 a.m., stare inside, and never commit to anything.

Run it with Node 22+:

```sh
node main.ts
```
