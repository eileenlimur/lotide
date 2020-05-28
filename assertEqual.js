const assertEqual = function(actual, expected) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${actual} === ${expected}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  
  if (actual === expected) {
    console.log(successMessage);
  } else if (actual !== expected) {
    console.log(failureMessage);
  }

};