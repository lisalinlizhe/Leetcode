/**
 * Created by lizhelin on 18/9/12.
 */
var licenseKeyFormatting = function(S, K) {
  S = S.toUpperCase();
  var res = "";
  for(var i = S.length - 1; i >= 0; i--){
    var count = 0;
    while(count < K && i>= 0){
      var char = S[i];
      if(nonDash(char)){
        res = char + res;
        count++;
        i--;
      }
      else i--;
    }
    if(i === -1) break;
    else {
      res = '-' + res;
      i++;
    }
  }
  var m = 0;
  while(m < res.length && res[m] === '-') {
    m++;
  }
  res = res.slice(m, res.length)
  return res;
};

var nonDash = function(c){
  return c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';
};