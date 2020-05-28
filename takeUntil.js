//tester functions
const assertArraysEqual = function(actual, expected) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${actual} === ${expected}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  
  if (eqArrays(actual, expected)) {
    console.log(successMessage);
  } else {
    console.log(failureMessage);
  }
  
};

const eqArrays = function(array1, array2) {
  let equals = true;
  
  if (array1.length !== array2.length) {
    equals = false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equals = false;
    }
  }
  
  return equals;
};

//takeUntil function implementation

const takeUntil = function(array, callback) {
  const results = [];

  for (let el in array) {
    if (!callback(array[el])) {
      results.push(array[el]);
    } else
    break;
  }
  return results;
}

//test cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1,[1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);