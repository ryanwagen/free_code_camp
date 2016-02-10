function fearNotLetter(str) {
  var alphArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  str = str.split('');
  var alphStart = 0;
  var newStr = [];
  for(var i=0;i<alphArr.length;i++){
    if(alphArr[i]==str[0]){
      alphStart = i;
    }
  }
  for(var y=0;y<str.length;y++){
    if(str[y]!==alphArr[alphStart+y]){
      newStr = newStr.concat(alphArr[alphStart+y]);
      alphStart = alphStart+1;
    }
  }
  newStr=newStr.join();
  if(newStr===''){
    newStr=undefined;
  }
  return newStr;
}

fearNotLetter("abce");
