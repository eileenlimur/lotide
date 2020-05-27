//declare if two arrays are equal

const 

const assertArraysEqual = function(array1, array2) {
  
  const successMessage = `🏅🏅🏅Assertion Passed: [${array1}] === [${array2}]`;
  const failureMessage = `🛑🛑🛑Assertion Failed: [${array1}] !== [${array2}]`;
  let equalityAssessment = successMessage;

  if (array1.length !== array2.length) {
    equalityAssessment = failureMessage;
  }  

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equalityAssessment = failureMessage;
    }
  }

  console.log(equalityAssessment);

};

//check if two arrays are equal

const eqArrays = function(array1, array2) {

  let equal = true;

  if (array1.length !== array2.length) {
    equal = false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
    }
  }

  return equal;

}