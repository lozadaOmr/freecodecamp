
function convertToRoman(num) {
  var romanArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var decimalArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  var romanNums = [];
  for (i = decimalArr.length - 1; i >= 0; i--) {
    var currentNum = num/decimalArr[i]; 
    var checker = Math.floor(currentNum) * decimalArr[i];
    
    if (checker > 0) {
      romanNums.push(romanArr[i].repeat(Math.floor(currentNum)));
      num -= checker;
    }
  }
  return romanNums.join("");
}

convertToRoman(3999);
