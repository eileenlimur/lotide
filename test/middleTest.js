const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
	it("returns the middle element in an array of an odd number of elements", () => {
		assert.deepEqual(middle([1, 2, 3]), [2]);
	});
	it("returns the two middle elements in an array of an even number of elements", () => {
		assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
	});
});


// const assertArraysEqual = require('../assertArraysEqual');


// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);
