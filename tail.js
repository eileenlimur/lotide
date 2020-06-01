const tail = (array) => {
  const tailArray = array.slice(1, array.length);
  return tailArray;
};

module.exports = tail;