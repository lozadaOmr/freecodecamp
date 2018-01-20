
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(obj) {
    // check if both source property/value pair matches
    for (var prop in source) {
      // if one pair fails filter it out
      if (source[prop] != obj[prop]) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
