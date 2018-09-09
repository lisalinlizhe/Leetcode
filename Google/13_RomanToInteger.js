/**
 * Created by lizhelin on 18/9/8.
 */
var romanToInt = function(s) {
  var res = 0;
  for(var i = 0; i < s.length; i++) {
    var char = s[i];
    if(char === 'M') {
      res += 1000;
    }
    else if(char === 'D') {
      res += 500;
    }
    else if(char === 'C') {
      if(i < s.length -1) {
        if(s[i + 1] === 'D') {
          res+= 400;
          i++;
        }
        else if(s[i + 1] === 'M'){
          res += 900;
          i++;
        }
        else res += 100;
      }
      else res += 100;
    }
    else if(char === 'L') {
      res += 50;
    }
    else if(char === 'X'){
      if(i < s.length -1) {
        if(s[i + 1] === 'L') {
          res+= 40;
          i++;
        }
        else if(s[i + 1] === 'C'){
          res += 90;
          i++;
        }
        else res += 10;
      }
      else res += 10;
    }
    else if(char === 'V') {
      res += 5;
    }
    else if(char === 'I'){
      if(i < s.length -1) {
        if(s[i + 1] === 'V') {
          res+= 4;
          i++;
        }
        else if(s[i + 1] === 'X'){
          res += 9;
          i++;
        }
        else res += 1;
      }
      else res += 1;
    }
  }
  return res;
};