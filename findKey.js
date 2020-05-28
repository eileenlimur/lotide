//assertion function

const assertEqual = function(actual, expected) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${actual} === ${expected}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  
  if (actual === expected) {
    console.log(successMessage);
  } else if (actual !== expected) {
    console.log(failureMessage);
  }

};

//implementation of findKey function
  //takes object and a callback func
    //scans object and returns first key that returns truthy for callback
      //if no key, undefined

const findKey = (object, callback) => {
  
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

};

//test cases


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");