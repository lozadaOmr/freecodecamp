
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  console.log('----------------------*');
  // loop through each obj
  arr = collection.filter(function(obj, index) {
    for (var prop in source) {
      if (obj.hasOwnProperty(prop) && obj[prop] == source[prop]) {
        return obj;
      }
    }
  });

  var uniqueArr = [];
  // loop through filtered array obj
  for (i=0;i<arr.length;i++) {
    for (var prop in arr[i]) {
      if (arr[i].hasOwnProperty(prop)) {
        var newObj = {};
        newObj = arr[i][prop];
        console.log(uniqueArr.push(newObj));

//         console.log(arr[i][prop]);
      }
    }
  }
//   for (var prop in source) {
//     console.log(prop);
//     for (i=0;i<collection.length;i++) {
//       if (collection[i].hasOwnProperty(prop) && collection[i][prop] == source[prop]) {
//         var obj = {};
//         obj = collection[i];
//         arr.push(obj);  

//       }
//     }
//   }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
