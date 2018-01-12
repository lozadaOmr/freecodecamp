
function titleCase(str) {
  strArray = str.split(" ");
  var titleCaseSentence = "";
  for (var i = 0; i < strArray.length; i++) {
    word = strArray[i].split("");
    newWord = [];
    for (var w = 0; w < word.length; w++) {
      if (w > 0) {
        newWord.push(word[w].toLowerCase());
      } else {
        newWord.push(word[w].toUpperCase());
      }
    }
    titleCaseSentence +=  newWord.join("");
    if (i < strArray.length - 1) { 
      titleCaseSentence += " ";
    }
  }
  return titleCaseSentence;
}

titleCase("I'm a little tea pot");
