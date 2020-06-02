
//THE REAL DEAL: an eqObjects function that detects if two objects are equa// Takes 2 objects as params
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

module.exports = eqObjects;