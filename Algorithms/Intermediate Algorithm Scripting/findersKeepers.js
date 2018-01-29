
function findElement(arr, func) {
  var num = 0;
  for (i=0; i<arr.length; i++) {
    while (num == 0 && func(arr[i])) {
      return arr[i];
    }
  }
}

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
