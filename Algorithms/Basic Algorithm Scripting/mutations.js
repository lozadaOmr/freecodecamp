
function mutation(arr) {
  matchArr = arr[1].split("");

  for (var i = 0; i < matchArr.length; i++) {
    var bool = arr[0].toLowerCase().indexOf(matchArr[i].toLowerCase());
    if (bool < 0) {
      return false;
    }
  }
  return true;  
}

mutation(["hello", "hey"]);
