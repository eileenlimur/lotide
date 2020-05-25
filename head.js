const head = (array) => {
  let firstElement = array[0];
  return firstElement;
}

const assertEqual = function(actual, expected) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${actual} === ${expected}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(successMessage);
  } else if (actual !== expected) {
    console.log(failureMessage);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello"]), "Hello");