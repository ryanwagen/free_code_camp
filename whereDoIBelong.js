function where(arr, num) {
  var placement=-1;
  var placeBool=false;
  arr.sort(function(a,b){
    return a-b;
  });
  for(var i=0;i<arr.length;i++){
    if(arr[i]>=num && placeBool===false){
      placement=i;
      placeBool=true;
    }
  }
  if(placeBool===false){
    placement=arr.length;
  }
  return placement;
}

where([2, 5, 10], 15);
