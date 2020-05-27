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

assertEqual([1,2,3],[1,2,3]);