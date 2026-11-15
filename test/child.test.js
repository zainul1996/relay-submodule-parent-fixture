import assert from "node:assert/strict";
import test from "node:test";

import { childMessage } from "../src/child.mjs";

test("reads the pinned child message", async () => {
  assert.equal(await childMessage(), "hello from child v1");
});
