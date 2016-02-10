function drop(arr, func) {
  var funcBool=true;
  var iRec=0;
  var newArr=[];
  for(var i=0;i<arr.length;i++){
    if(func(arr[i]) && funcBool){
      funcBool=false;
      iRec=i;
    }
    if(!funcBool){
      newArr[i-iRec]=arr[i];
    }
  }
  return newArr;
}

drop([1, 2, 3], function(n) {return n < 3; });
