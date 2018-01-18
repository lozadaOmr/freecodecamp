
function convertToRoman(num) {
  romanArr = ["I", "V", "X","L","C", "D", "M"];
  decimalArr = [1, 5, 10, 50 , 100, 500, 1000];
  
  if (Math.floor((num / 1) % 10) > 0) {
    ones = Math.floor(( num / 1) % 10);
  } 
  if (Math.floor((num / 10) % 10) > 0) {
    tens = Math.floor(( num / 10) % 10);
  }
  if (Math.floor((num / 100) % 10) > 0) {
    hundreds = Math.floor(( num / 100) % 10);
  }
  if (Math.floor((num / 1000) % 10) > 0) {
    thousands = Math.floor(( num / 1000) % 10);
  }
}

convertToRoman(2014);
