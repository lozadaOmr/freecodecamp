
function pairElement(str) {
  dnaArr = str.split("");
  dnaPair = [];

  for (i=0; i < dnaArr.length; i++) {
    switch(str[i]) {
      case "G":
        dnaPair.push(["G","C"]);
        break;
      case "T":
        dnaPair.push(["T","A"]);
        break;
      case "C":
        dnaPair.push(["C","G"]);
        break;
      case "A":
        dnaPair.push(["A","T"]);
        break;
    } 
  }
  return dnaPair;
}

pairElement("ATCGA");

