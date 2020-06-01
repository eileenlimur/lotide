const middle = function(array) {
  const middleElements = [];

  if (array.length < 3) {
    return middleElements;
  } else {
    const midpointIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      middleElements.push(array[midpointIndex - 1]);
      middleElements.push(array[midpointIndex]);
    } else {
      middleElements.push(array[midpointIndex]);
    }
  }

  return middleElements;
};

module.exports = middle;