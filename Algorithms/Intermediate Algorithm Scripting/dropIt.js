
function dropElements(arr, func) {
  // Drop them elements.
  var predicateSatisfied = false;

  return arr.filter(function(val) {
    if (predicateSatisfied == false) {
      if (func(val) == false) {
        return false;
      } else {
        predicateSatisfied = true;
        return true;
      }
    } else {
      return true;
    }
  });
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
