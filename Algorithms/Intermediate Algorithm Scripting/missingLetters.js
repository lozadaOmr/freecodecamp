
function fearNotLetter(str) {
  strArr = str.split("");
  prevCharCode = strArr[0].charCodeAt();

  for (i=0; i < strArr.length; i++) {
    var diff = str[i].charCodeAt() - prevCharCode;
    if (diff > 1) {
      return String.fromCharCode(prevCharCode + 1);
    }
    prevCharCode = str[i].charCodeAt();
  }

  return undefined;
}

fearNotLetter("abce");
