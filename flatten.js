const flatten = function(array) {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        outputArray.push(array[i][j]);
      }
    } else {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
}

module.exports = flatten;