const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns a TV show name when given the name of its genre", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      animation: "Inside Out"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Inside Out"), "animation");
  });
  it("returns a TV show name when given the name of its genre", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      animation: "Inside Out"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});