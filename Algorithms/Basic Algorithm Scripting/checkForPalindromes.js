function palindrome(str) {
  var palindromeStr = str.toLowerCase().match(/[A-Za-z0-9]/g).join("");
  var reverseStr = "";
  for (var i = palindromeStr.length - 1; i >= 0; i--) {
    reverseStr += palindromeStr[i];
  }
  if (reverseStr != palindromeStr) {
    return false;
  } 
  return true;
}

palindrome("eye");
