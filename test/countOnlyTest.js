const countOnly = require("../countOnly");
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns an object with a count of all names included in input array, as specified by an input object", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), {"Jason": 1, "Fang": 2});
  });
  it("returns an object with a count of all names included in input array, as specified by an input object", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Salima": true }), {"Jason": 1, "Salima": 2});
    });
  
});