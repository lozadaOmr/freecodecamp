
function addTogether() {
  console.log('-->');
  var arr = Array.from(arguments);
  if (!arr.every(isNumber)) {
    return undefined;
  }

  if (arr.length == 2) {
    return arr.reduce(function(total, current){
      return total + current;
    });
  }
  return false;
}


function isNumber(arg) {
  if (typeof(arg) == "number") {
    return true;
  }
  return false;
}

// If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
addTogether(99,3);
