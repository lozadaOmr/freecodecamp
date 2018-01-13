
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var strEnding = str.substr(str.length - target.length, target.length);

  if (strEnding != target) {
    return false;
  } else {
    return true;
  }
}

confirmEnding("Bastian", "n");
