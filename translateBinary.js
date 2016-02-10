function binaryAgent(str) {
  var newStr=[];
  var binVal=0;
  str=str.split(' ');
  for(var i=0;i<str.length;i++){
    str[i].split('');
    for(var y=0;y<str[i].length;y++){
      if(str[i][y]==1){
        binVal+=Math.pow(2,7-y);
      }
    }
    newStr[i]=String.fromCharCode(binVal);
    binVal=0;
  }
  newStr=newStr.join('');
  return newStr;
}
