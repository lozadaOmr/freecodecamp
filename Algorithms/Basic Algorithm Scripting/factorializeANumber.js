function factorialize(num) {
  var factorials = [];
  for (var val = num; val > 0; val--) {
    factorials.push(val);
  }
  
  var nums = 1;
  var factorial = 1;
  for (var index = 0; index < factorials.length; index++) {
    factorial *= factorials[index]; 
  }
  return factorial;
}

factorialize(5);
