function convert(num) {
  var baseNum = "";
  var halfNum = "";
  var nextNum = "";
  var newNum = "";
  var numArr=[];
  num=num.toString();
  num=num.split('');
  for(var i=0;i<num.length;i++){
    switch(num.length-i){
      case 4:
        baseNum="M";
        halfNum="Y";
        nextNum="F";
        break;
      case 3:
        baseNum="C";
        halfNum="D";
        nextNum="M";
        break;
      case 2:
        baseNum="X";
        halfNum="L";
        nextNum="C";
        break;
      case 1:
        baseNum="I";
        halfNum="V";
        nextNum="X";
        break;
    }
    switch(num[i]){
      case "1":
        newNum += baseNum;
        break;
      case "2":
        newNum += baseNum+baseNum;
        break;
      case "3":
        newNum += baseNum+baseNum+baseNum;
        break;
      case "4":
        newNum += baseNum+halfNum;
        break;
      case "5":
        newNum += halfNum;
        break;
      case "6":
        newNum += halfNum+baseNum;
        break;
      case "7":
        newNum += halfNum+baseNum+baseNum;
        break;
      case "8":
        newNum += halfNum+baseNum+baseNum+baseNum;
        break;
      case "9":
        newNum += baseNum+nextNum;
        break;
    }
    
  }
  
  return newNum;
}
