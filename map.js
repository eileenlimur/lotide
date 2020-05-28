//assertion functions
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

//main function
//two args: array to map, callback function
//return: new array based on results of callback func
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//test cases

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word.replace(/o/g, "a")), ["graund","cantral","ta","majar","tam"]);
assertArraysEqual(map(words, word => word.slice(2)), ["ound", "ntrol", "", "jor", "m"]);
assertArraysEqual(map(words, word => word + "ism"), ["groundism", "controlism", "toism", "majorism", "tomism"]);