function findLongestWord(str) {
  str = str.split(' ');
  var len = 0;
  for(var i=0;i<str.length;i++){
    if (str[i].length > len) {
      len = str[i].length;
    }
  }
  return len;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
