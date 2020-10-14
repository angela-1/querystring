import assert from "assert";
import { add } from "../dist/querystring.esm.js";

function test(a, b, expected) {
  assert.strictEqual(add(a, b), expected);
  console.log(`\u001B[32m✓\u001B[39m ${expected}`);
}

test(1, 3, 4);
test(21, 93, 114);

console.log("done");
