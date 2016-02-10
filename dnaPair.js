function pair(str) {
  var newArr=[];
  str = str.split('');
  for(var i=0;i<str.length;i++){
    if(str[i]=='C'){
      newArr[i]=["C","G"];
    } else if(str[i]=='G'){
      newArr[i]=["G","C"];
    } else if(str[i]=='T'){
      newArr[i]=["T","A"];
    } else if(str[i]=='A'){
      newArr[i]=["A","T"];
    } else{
      newArr[i]=[];
    }
  }
  return newArr;
}

pair("GCG");
