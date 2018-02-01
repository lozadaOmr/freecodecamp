
function truthCheck(collection, pre) {
  // Is everyone being true?
  var allTruthy = true;
  collection.forEach(function (arrayItem) {
    if (arrayItem.hasOwnProperty(pre)) {
      if (!arrayItem[pre] && allTruthy) {
        allTruthy = false;
      }
    } else {
      allTruthy = false;
    }
  });
  return allTruthy;
}

truthCheck([{"single": "yes"}], "single");
