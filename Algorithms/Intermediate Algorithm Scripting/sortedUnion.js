
function uniteUnique(arr) {
  flattenArr = [];
  for (i=0; i<arguments.length; i++) {
    for (j=0; j<arguments[i].length; j++) {
      flattenArr.push(arguments[i][j]);
    }
  }
  
  final = [];
  for (i=0; i < flattenArr.length;i++) {
    console.log(flattenArr[i]);
    if (final.indexOf(flattenArr[i]) < 0) {
      final.push(flattenArr[i]);
    }
  }
  return final;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

