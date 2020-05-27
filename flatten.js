const flatten = function(array) {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        outputArray.push(array[i][j]);
      }
    } else {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));

//checking functions

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