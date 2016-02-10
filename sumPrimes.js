function sumPrimes(num) {
  var primSum=0;
  var bool=true;
  for(var i=num;i>1;i--) {
    bool=true;
    for(var y=i-1;y>1;y--) {
      if(i%y===0){
        bool=false;
      }
    }
    if(bool===true){
      primSum=i+primSum;
    }
  }
  return primSum;
}

sumPrimes(10);
