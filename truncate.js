function truncate(str, num) {
  if(num<str.length){
    if(num > 3){
      str = str.slice(0,num-3);
    } else{
      str = str.slice(0,num);
    }
    str = str.concat('...');
  }
  return str;
}

truncate("A-", 1);
