//find key by value function. takes object and value as params. returns key that 

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
}

module.exports = findKeyByValue;