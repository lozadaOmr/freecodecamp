
function myReplace(str, before, after) {
  var strArr = str.split(" ");
  var strIndex = strArr.indexOf(before);
  
  var word = strArr[strIndex].split("");
  var wordIsLowerCase;
  for (i=0; i < word.length; i++) {
    if (i == 0 && word[i] == word[i].toUpperCase()) {
      wordIsLowerCase = false;
    } else if (i == 0 && word[i] == word[i].toLowerCase()) {
      wordIsLowerCase = true;
    }
  }
  
  var afterArr = after.split("");
  if (wordIsLowerCase == true) {
    after = after.toLowerCase();
  } else if (wordIsLowerCase == false) {
    afterArr[0] = after.charAt(0).toUpperCase();
  }
  
  strArr[strIndex] = afterArr.join("");
  return strArr.join(" ");
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
