//assertion functions

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

//actual function

const middle = function(array) {
  const middleElements = [];

  if (array.length < 3) {
    return middleElements;
  } else {
    const midpointIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      middleElements.push(array[midpointIndex - 1]);
      middleElements.push(array[midpointIndex]);
    } else {
      middleElements.push(array[midpointIndex]);
    }
  }

  return middleElements;
};

assertEqual(middle([1, 2, 3]), [2]);
assertEqual(middle([1, 2, 3, 4, 5]), [3]);
assertEqual(middle([1, 2, 3, 4]), [2, 3]);
assertEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertEqual(middle([1, 2]), []);
assertEqual(middle([1]), []);
