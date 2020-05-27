//asertion function

const assertEqual = function(actual, expected) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${actual} === ${expected}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  
  if (actual === expected) {
    console.log(successMessage);
  } else if (actual !== expected) {
    console.log(failureMessage);
  }

};

//actual function

const countLetters = function(string) {
  let letterCount = {};
  let simplifiedString = string.toLowerCase();
  simplifiedString = simplifiedString.replace(/\s/g, "");

  for (letter of simplifiedString) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  }

  return letterCount;
}

//testing

const stringToCount = "Why oh why is the sky so blue on days like these";
const testerFunction = countLetters(stringToCount);
console.log(testerFunction);
assertEqual(testerFunction["h"], 5);