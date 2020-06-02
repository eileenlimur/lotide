const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true when two arrays are equivalent", () => {
    assert.deepEqual(eqArrays([1,2,3,4], [1,2,3,4]), true);
  });
});