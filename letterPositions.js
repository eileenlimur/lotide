//assertion functions

const assertArraysEqual = function(array1, array2) {
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

//return object of letter positions taking a string as a param

const letterPositions = function(sentence) {
  const results = {};
  const simpleSentence = sentence.toLowerCase();
  
  for (let i = 0; i < simpleSentence.length; i++) {
    if (simpleSentence[i] !== " ") {
      if (!results[simpleSentence[i]]) {
        results[simpleSentence[i]] = [];
        results[simpleSentence[i]].push(i);
      } else {
        results[simpleSentence[i]].push(i);
      }
    }
  }
  
  return results;
}

//testing

const letterPositionsHello = letterPositions("hello");

assertArraysEqual(letterPositionsHello["h"],[0]);
assertArraysEqual(letterPositionsHello["e"],[1]);
assertArraysEqual(letterPositionsHello["l"],[2, 3]);
assertArraysEqual(letterPositionsHello["o"],[4]);