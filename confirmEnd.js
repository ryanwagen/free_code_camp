function end(str, target) {
  var bool = false;
  if(target === str.substr(str.length-target.length)){
    bool = true;
  }
  return bool;
}

end("Bastian", "n");
