//helper: main assertion function

const assertEqual = function(actual, expected) {
  const successMessage = `🏅🏅🏅Assertion Passed: ${actual} === ${expected}`;
  const failureMessage = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  
  if (actual === expected) {
    console.log(successMessage);
  } else if (actual !== expected) {
    console.log(failureMessage);
  }

};

//helper: array comparison function (returns true if arrays equal)

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

//THE REAL DEAL: an eqObjects function that detects if two objects are equal
// Takes 2 objects as params
// Returns true if both objects have identical keys with identical values

const eqObjects = function(object1, object2) {
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;
  let equal = true;

  if (object1Length !== object2Length) {
    equal = false;
  }

  for (let key in object1) {
    if (!Array.isArray(object1[key])) {
      if (object2[key] !== object1[key]) {
        equal = false;
      }
    } else {
      if (!eqArrays(object1[key], object2[key])) {
        equal = false;
      }
    }
  }

  return equal;
};

//check functions

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", "3"] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);