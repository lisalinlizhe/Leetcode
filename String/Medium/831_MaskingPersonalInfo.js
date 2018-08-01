/**
 * Created by lizhelin on 18/7/31.
 */
var maskPII = function(S) {
  var isEmail = S.indexOf('@');
  if(isEmail !== -1){
    var s = S.toLowerCase();
    var str = s[0];
    var index = 0;
    while(index < 5) {
      str += '*'
      index++;
    }
    str += s[isEmail - 1];
    return str + s.substring(isEmail, s.length);
  }
  else {
    var len = S.length;
    var count = 0;
    var res = "";
    var number = getNumber(S);
    if(number > 10) hasCountryCode = true;
    else hasCountryCode = false;
    while(count < 4) {
      if(S[len - 1] >= '0' && S[len - 1] <= '9'){
        res = S[len - 1] + res;
        len--;
        count++;
      }
      else len--;
    }
    count = 0;
    res = '-' + res;
    while(count < 3) {
      res = '*' + res;
      count++;
    }
    count = 0;
    res = '-' + res;
    while(count < 3) {
      res = '*' + res;
      count++;
    }
    if(hasCountryCode) {
      var sub = "+";
      for(var k = 0; k < S.length; k++) {
        if(S[k] >= '0' && S[k] <= '9') sub += '*';
        if(sub.length === number - 10 + 1) break;
      }
      return sub + '-' + res;
    }
    else return res;
  }
};

var getNumber = function(s){
  var n = 0;
  for(var i = 0; i < s.length; i++) {
    if(s[i] >= '0' && s[i] <= '9') n++;
  }
  return n;
}