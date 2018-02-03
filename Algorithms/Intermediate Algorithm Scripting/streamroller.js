
function steamrollArray(arr) {
  // I'm a steamroller, baby
  flatArr = [];
  arr.forEach(function(item) {
    extract(item);
  });
  return flatArr;
}

function extract(item) {
  if (!Array.isArray(item)) {
    flatArr.push(item);
  } else if (item.length > 0) {
    item.forEach(function(subArr) {
      extract(subArr);      
    });
  }
}

steamrollArray([99, [3, [[4]]]]);
