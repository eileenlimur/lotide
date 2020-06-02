const letterPositions = require("../letterPositions");
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns object where each key is a letter and each value gives an array of all indexes of that letter", () => {
    assert.deepEqual(letterPositions("hello"), {"h": [0], "e": [1], "l": [2, 3], "o": [4]});
  });
  it("returns object where each key is a letter and each value gives an array of all indexes of that letter", () => {
    assert.deepEqual(letterPositions("Eileen"), {"e": [0, 3, 4], "i": [1], "l": [2], "n": [5]});
  });
});