
function largestOfFour(arr) {
  // You can do this!
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var highestNum = arr[i].sort(function(a,b) {
      return b - a;
    });
    highestNum = highestNum.shift();
    newArr.push(highestNum);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
