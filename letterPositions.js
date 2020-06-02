//return object of letter positions taking a string as a param

const letterPositions = function(sentence) {
  const results = {};
  const simpleSentence = sentence.toLowerCase();
  
  for (let i = 0; i < simpleSentence.length; i++) {
    if (simpleSentence[i] !== " ") {
      if (!results[simpleSentence[i]]) {
        results[simpleSentence[i]] = [];
        results[simpleSentence[i]].push(i);
      } else {
        results[simpleSentence[i]].push(i);
      }
    }
  }
  
  return results;
}

module.exports = letterPositions;