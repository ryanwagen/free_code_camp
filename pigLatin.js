function translate(str) {
  var newStr=str.split('');
  var iRec=0;
  var loopBool=true;
  for(var i=0;i<newStr.length;i++){
    if(loopBool){
      switch(newStr[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          loopBool=false;
          iRec=i;
          break;
      }
    }
  }
  if(iRec===0){
    str+="way";
  } else{
    str=str.substr(iRec,str.length)+str.substr(0,iRec)+"ay";
  }
  return str;
}

translate("california");
