
function rot13(str) { // LBH QVQ VG!
  strArr = str.split("");
  for (var i = 0; i < strArr.length; i++) {
    
    encodedChar = strArr[i].charCodeAt();
    if (encodedChar >= 65 && encodedChar <= 90) {
      
      if ((encodedChar - 13) < 65) {
        strArr[i] = String.fromCharCode((encodedChar - 13) + 26);
      } else {
        strArr[i] = String.fromCharCode(encodedChar - 13);
      }
    }
  }
  return strArr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
