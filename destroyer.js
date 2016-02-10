function destroyer(arr) {
  var newArr=[];
  var newBool = true;
  for(var i=0;i<arr.length;i++){
    for(var y=1;y<arguments.length;y++){
      if(arr[i]===arguments[y]){
        newBool=false;
      }
    }
    if(newBool===true){
      newArr.push(arr[i]);
    } 
    newBool=true;
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
