
function findLongestWord(str) {
  var longestWord = str.split(" ").map(function(val) {
    return val.length;
  }).sort(function(a,b) {
    return b - a;
  }).shift();
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
