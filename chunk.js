function chunk(arr, size) {
  var newarr=[];
  var subarr=[];
  var arrct=0;
  var subct=0;
  for(var i=0;i<arr.length;i++){
    subarr[subct]=arr[i];
    subct++;
    if(subct==size){
      newarr[arrct]=subarr;
      subarr=[];
      subct=0;
      arrct++;
    }
  }
  if(subct >0){
    newarr[arrct]=subarr;
  }
  return newarr;
}

chunk(["a", "b", "c", "d"], 2);
