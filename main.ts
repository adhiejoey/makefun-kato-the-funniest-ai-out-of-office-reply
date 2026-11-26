import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest AI out-of-office reply: the agent is on vacation, so it
// hands the sender's email to its replacement - a toaster - which refuses
// the job over a crumb emergency. Machine voice, surprising turn, and no
// beach, inbox, or "back soon" cliche in sight.
const entry =
  "Out of office: I forwarded your email to my replacement, a toaster. It declined, citing a crumb emergency.";

// Guard the gate before writing: one line, plain ASCII, and at least 5
// characters under the 160-character limit. Fail loudly instead of ever
// shipping an invalid entry.
if (
  entry.length > 155 ||
  entry.includes("\n") ||
  /[^\x20-\x7E]/.test(entry)
) {
  throw new Error("entry violates the gate: check length, line count, ASCII");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
