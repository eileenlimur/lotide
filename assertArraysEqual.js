const assertEqual = function(array1, array2) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${array1} === ${array2}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`;
  
  if (eqArrays(array1, array2) === true) {
    console.log(successMessage);
  } else if (eqArrays(array1, array2) === false) {
    console.log(failureMessage);
  }
  
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
};

assertEqual([1,2,3],[1,2,3]);