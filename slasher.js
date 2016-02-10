function slasher(arr, howMany) {
  if(howMany>=arr.length){
    arr=[];
  } else{
   arr.splice(0,howMany);
  }
  
  return arr;
}

slasher([1, 2, 3], 2);
