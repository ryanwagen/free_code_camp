function sumAll(arr) {
  var sumTot=arr[0]+arr[1];
  var plusMin=0;
  if(arr[0]>arr[1]){
    plusMin=-1;
  } else{
    plusMin=1;
  }
  var i=arr[0]+plusMin;
  while(i!=arr[1]){
    sumTot=i+sumTot;
    i=i+plusMin;
  }
  return sumTot;
}

sumAll([4, 1]);
