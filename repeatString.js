function repeat(str, num) {
  var basestr = str;
  for(var i=1;i<num;i++){
    str = str.concat(basestr);
  }
  if(num<=0){
    str = '';
  }
  return str;
}

repeat("abc", 3);
