const assertEqual = function(array1, array2) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${array1} === ${array2}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`;
  
  if (eqArrays(array1, array2)) {
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