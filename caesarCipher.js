function rot13(str) { // LBH QVQ VG!
  var newStr=[];
  
  for(var i=0;i<str.length;i++){
    if(str.charCodeAt(i)>77 && str.charCodeAt(i) < 91){
      newStr[i]=String.fromCharCode(str.charCodeAt(i)-13);
    } else if(str.charCodeAt(i)>64 && str.charCodeAt(i) < 78){
      newStr[i]=String.fromCharCode(str.charCodeAt(i)+13);
    } else{
      newStr[i]=str[i];
    }
  }
  newStr=newStr.join('');
  return newStr;
}


rot13("SERR PBQR PNZC");
