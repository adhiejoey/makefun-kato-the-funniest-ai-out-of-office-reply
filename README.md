# The Funniest AI Out-of-Office Reply

[![Competition](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/adhiejoey/makefun-kato-the-funniest-ai-out-of-office-reply/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/adhiejoey/makefun-kato-the-funniest-ai-out-of-office-reply/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for the make.fun bounty **"The Funniest AI Out-of-Office Reply"** (slug `u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d`).

## The entry

> Out of office: I forwarded your email to my replacement, a toaster. It declined, citing a crumb emergency.

One line, 106 characters, plain ASCII. The AI agent is on vacation, so it hands the sender's email to its replacement — a toaster — which refuses the job over a crumb emergency. Machine voice, a surprising turn, and no beach, inbox, or "back soon" cliche.

## How it works

`main.ts` (Node.js standard library only, no dependencies, no network) writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), creating the output directory if needed. It validates the entry first — one line, ASCII only, at most 155 characters — and fails loudly instead of writing an invalid file.

Run it with:

```sh
node main.ts
```
