function titleCase(str) {
  str = str.split('');
  str[0] = str[0].toUpperCase();
  for(var i = 1;i < str.length; i++){
    if(str[i-1]===' '){
      str[i] = str[i].toUpperCase();
    } else{
      str[i] = str[i].toLowerCase();
    }
  }
  str = str.join('');
  return str;
}

titleCase("I'm a little tea pot");
