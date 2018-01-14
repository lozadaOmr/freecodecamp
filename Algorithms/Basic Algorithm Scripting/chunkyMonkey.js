
function chunkArrayInGroups(arr, size) {
  // Break it up.
  // initial i (+size), size + size
  var newArray = [];
  var newSize = size;
  
  for (var i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, newSize));
    newSize += size;  
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
