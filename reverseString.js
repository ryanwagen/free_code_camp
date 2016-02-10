function reverseString(str) {
  var tempArr = str.split('');
  tempArr = tempArr.reverse();
  str = tempArr.join('');
  return str;
}

reverseString("hello");
