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

//checking functions

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

console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

