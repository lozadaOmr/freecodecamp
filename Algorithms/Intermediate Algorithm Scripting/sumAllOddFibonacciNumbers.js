
function sumFibs(num) {
  var startNum = 0;
  var nextNum = 1;
  var currentSum = 0;
  var oddFiboSum = 0;

  for (i=0; i < num; i++) {
    currentSum = startNum + nextNum;

    if ((currentSum % 2) != 0 && currentSum <= num) {

      oddFiboSum += currentSum;
    }
    startNum = nextNum;
    nextNum = currentSum;
  }
  return oddFiboSum + 1;
}

sumFibs(75024);
