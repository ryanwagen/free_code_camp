function sumFibs(num) {
  var fibAmt=1;
  var lFibLoop=0;
  var fibLoop=1;
  while(fibLoop<=num){
    fibLoop=lFibLoop+fibLoop;
    lFibLoop=fibLoop-lFibLoop;
    if(fibLoop%2!==0&&fibLoop<=num){
      fibAmt=fibAmt+fibLoop;
    }
  }
  return fibAmt;
}

sumFibs(4);
