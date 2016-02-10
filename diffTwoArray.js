function diff(arr1, arr2) {
  var newArr = [];
  var bool = false;
  for(var i=0;i<arr1.length;i++){
    for(var y=0;y<arr2.length;y++){
      if(arr1[i]===arr2[y]){
        bool = true;
      }
    }
    if(bool===false){
      newArr = newArr.concat(arr1[i]);
    }
    bool = false;
  }
  for(var u=0;u<arr2.length;u++){
    for(var v=0;v<arr1.length;v++){
      if(arr1[v]===arr2[u]){
        bool = true;
      }
    }
    for(var t=0;t<newArr.length;t++){
      if(newArr[t]===arr2[u]){
        bool = true;
      }
    }
    if(bool===false){
      newArr = newArr.concat(arr2[u]);
    }
    bool = false;
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
