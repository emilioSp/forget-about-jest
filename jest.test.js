const fs = require('node:fs');
const assert = require('node:assert');

describe('forget about jest test', () => {
  it('throw an error', () => {
    try {
      fs.readFileSync('not-existent-file');
    } catch (e) {
      assert.deepStrictEqual(e instanceof Error, true);
    }
  });
});
