function mutation(arr) {
  var bool = true;
  var subbool = true;
  var arrtwo = arr[1].toLowerCase().split('');
  var arrone = arr[0].toLowerCase().split('');
  for(var i = 0;i<arrtwo.length;i++){
    subbool = false;
    for(var y=0;y<arrone.length;y++){
      if(arrone[y]===arrtwo[i]){
        subbool = true;
      }
    }
    if(subbool===false){
      bool = false;
    }
  }
  return bool;
}

mutation(["hello", "hey"]);
