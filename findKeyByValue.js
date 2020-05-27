//assertion functions

const assertEqual = function(actual, expected) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${actual} === ${expected}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  
  if (actual === expected) {
    console.log(successMessage);
  } else if (actual !== expected) {
    console.log(failureMessage);
  }

};

//find key by value function. takes object and value as params. returns key that 

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
}


//test cases
      
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  animation: "Inside Out"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Inside Out"), "animation");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);