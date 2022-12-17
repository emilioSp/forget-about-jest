import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert';

test('forget about jest test', () => {
  try {
    fs.readFileSync('not-existent-file');
  } catch (e) {
    assert.deepStrictEqual(e instanceof Error, true);
  }
});
