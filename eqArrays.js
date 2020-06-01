const assertEqual = require('./assertEqual');

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
  return assertEqual(equals, true);
};

module.exports = eqArrays;