// noprotect  
function smallestCommons(arr) {
  arr = getMinMax(arr[0], arr[1]);

  var rangeArr = getRangeNum(arr.min, arr.max);
  rangeArr.sort(function(a,b) {
    return b - a;
  });

  var dividend = arr.max;
  var scm;
  while (scm == undefined) {
    rangeArr.some(function(val) {
      if (isDivisble(val, dividend) == false) {
        // short circuit the loop
        return true;
      } else if (isDivisble(val, dividend) == true) {
        // check if last value in rangeArr
        if (val == arr.min) {
          scm = dividend;
        }  
      }
    });
    dividend++;
  } 
  return scm;
}

function getMinMax(firstVal, secondVal) {
  if (firstVal > secondVal) {
    min = secondVal;
    max = firstVal;
  } else {
    min = firstVal;
    max = secondVal;
  }
  return {"min":min, "max":max};
}

function getRangeNum(min, max) {
  var arr = [];
  while(min <= max) {
    arr.push(min);
    min++;
  }
  return arr;
}

function isDivisble(divisor, dividend) {
  if ((dividend % divisor) == 0) {
    return true;
  }
  return false;
}


smallestCommons([23,18]);
