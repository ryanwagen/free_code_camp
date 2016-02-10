function myReplace(str, before, after) {
  var newStr;
  var iRec = 0;
  var finStr=[];
  var titleCase=[];
  before=before.toLowerCase();
  newStr=str.toLowerCase();
  newStr=newStr.split(' ');
  str=str.split(' ');
  for(var i=0;i<newStr.length+1;i++){
    finStr[i]=newStr[i];
    if(newStr[i]==before){
      finStr[i]=after;
      iRec=i;
    }
  }
  if(str[iRec]!=newStr[iRec]){
    titleCase=finStr[iRec].split('');
    titleCase[0]=titleCase[0].toUpperCase();
    str[iRec]=titleCase.join('');
  } else{
    str[iRec]=finStr[iRec];
  }
  str=str.join(' ');
  return str;
}

myReplace("Let us go to the store", "store", "mall");
