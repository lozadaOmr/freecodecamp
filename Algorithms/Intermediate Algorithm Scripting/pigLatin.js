
function translatePigLatin(str) {
  
  var strArr = str.split("");
  var firstLetter = str[0].charAt(0);
  var consonantCluster = [];
  var sequence = true;

  if (isVowel(firstLetter) == true) {
    return str + "way";
  }

  // check for consonant cluster
  for (i=0; i < strArr.length; i++) {
    if (isVowel(strArr[i]) == false) {
      consonantCluster.push(strArr[i]);
    } else if (isVowel(strArr[i]) == true) {
      break;
    }
  }
  firstLetter = consonantCluster.join("");

  return str.substr(consonantCluster.length, str.length) + firstLetter + "ay";
}

// maybe match using regex is better
function isVowel(letter) {
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

translatePigLatin("eight");

