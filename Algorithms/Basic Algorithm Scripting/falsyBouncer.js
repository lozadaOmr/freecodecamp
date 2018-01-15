
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  newArr = [];
  arr.filter(function(val) {
    if (val) {
      newArr.push(val);
    }
  });
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
