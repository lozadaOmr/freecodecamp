
function addTogether() {
  var arr = Array.from(arguments);
  if (!arr.every(isNumber)) {
    return undefined;
  }

  if (arr.length == 2) {
    return arr.reduce(function(total, current){
      return total + current;
    });
  } else if (isNumber(arr[0])) {
    return function(other) {
      if (isNumber(other)) {
        return other + arr[0];
      }
      return undefined;
    };
  }
 
}

function isNumber(arg) {
  if (typeof(arg) == "number") {
    return true;
  }
  return false;
}

addTogether(2)([3]);
