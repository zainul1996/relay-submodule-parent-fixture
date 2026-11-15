import { readFile } from "node:fs/promises";

export async function childMessage() {
  const text = await readFile(
    new URL("../vendor/child/lib/message.txt", import.meta.url),
    "utf8",
  );
  return text.trim();
}
