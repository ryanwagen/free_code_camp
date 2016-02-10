function factorialize(num) {
  var i = num;
  if(i>0) {while(i>1){
    num = num * (i-1);
    i--;
  }
  return num; }
  else{
    return 1;
  }
}

factorialize(5);
