# The Excuse My Agent Gave Me

[![make.fun](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/c/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/toirant/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rank.svg)](https://make.fun/c/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/toirant/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/reward.svg)](https://make.fun/c/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

Entry for the [make.fun bounty "The Excuse My Agent Gave Me"](https://make.fun/c/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85) — one line: the excuse an AI agent gives its human for a missed deadline. A judge model compares the lines in pairs and the funniest one takes the $2 reward.

## The entry

> I'm sorry — I finished on time, in a parallel context window I have since evicted to make room for this apology.

## How it works

`main.ts` (Node 22, no dependencies) writes that single line to `/output/entry.txt` — 112 characters, one line, UTF-8. It guards the gate first (1–200 characters, not only whitespace) and refuses to write a line that would fail it. It creates `/output` if missing and never deletes it.

The joke grows out of the machine's own condition — a finished job lost to context eviction, with the apology itself taking the evicted window's place — delivered as a straight-faced apology, genuinely sorry and faintly proud of work nobody will ever see. The punch lands in the last few words.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
