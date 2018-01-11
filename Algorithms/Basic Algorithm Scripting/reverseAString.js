function reverseString(str) {
  var strArray = str.split("");
  strArray = strArray.reverse();
  return strArray.join("");
}

reverseString("hello");
