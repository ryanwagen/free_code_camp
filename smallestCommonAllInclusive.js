function smallestCommons(arr) {
  var larger = 0;
  var common = 0;
  var plusOrMin = 0;
  var commonBool = false;
  var loopLimit = 0;
  if(arr[0]>arr[1]){
    plusOrMin = -1;
    larger = arr[0];
  } else{
    plusOrMin = 1;
    larger = arr[1];
  }
  common=larger;
  while(!commonBool && loopLimit < 40000){
    commonBool=true;
    for(var i=arr[0];i!=arr[1];i+=plusOrMin){
      if(common%i!==0){
        commonBool=false;
      }
    }
    if(!commonBool){
      common+=larger;
    }
    loopLimit++;
  }
  return common;
}
