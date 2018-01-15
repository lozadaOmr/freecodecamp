
function destroyer(arr) {
  // Remove all the values
  newArr = [];
  removeUs = [];
  // faster way of creating this list?
  for (i = 1; i < arguments.length; i++) {
    removeUs.push(arguments[i]);
  }
  // yeah, I know filter creates a new array already
  arr.filter(function(val) {
    if (removeUs.includes(val) == false) {
      newArr.push(val);
    }
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
