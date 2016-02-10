function boolEnough(val){
  return Boolean(val);
}

function bouncer(arr) {
  arr = arr.filter(boolEnough);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
