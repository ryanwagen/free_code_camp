function largestOfFour(arr) {
  var longest = 0;
  var newarr = [];
  for(var i = 0;i < 4; i++){
    for(var y = 0; y<4;y++){
      if(arr[i][y]>longest){
        longest = arr[i][y];
      }
    }
    newarr[i] = longest;
    longest = 0;
  }
  return newarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
