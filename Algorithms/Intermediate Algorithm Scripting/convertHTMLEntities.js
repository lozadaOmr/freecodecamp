
function convertHTML(str) {
  // &colon;&rpar;
  var strArr = str.split('');
  for(i=0; i < strArr.length; i++) {
    strArr[i] = toHTMLEntities(str[i]);     
  }
  return strArr.join('');
}

function toHTMLEntities(char) {
  switch(char) {
    case '>':
      return '&gt;';
    case '<':
      return '&lt;';
    case '&':
      return '&amp;';
    case '"':
      return '&quot;';
    case '\'':
      return '&apos;';
    default:
      return char;
  }
}

convertHTML("Dolce & Gabbana");
