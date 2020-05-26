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

const without = function(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[0]) {
      newArray.push(array1[i]);
    } else if (array1[i] === array2[0]) {
      for (let j = 0; j < array1.length - i; j++) {
        if (array1[i + j] !== array2[j]) {
          newArray.push(array1[i + j])
        }
      }  
      break;
    }
  }
return newArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);