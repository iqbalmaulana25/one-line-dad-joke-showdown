// Dad Joke Showdown
// Writes one dad joke to /output/entry.txt
// (must be 1..200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I asked the router why it kept blinking at me. It said our connection has issues and it needs space.";

// Gate guard: the scorer only accepts a single line of 1..200 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
