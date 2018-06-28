/**
 * Created by lizhelin on 18/6/27.
 */
var licenseKeyFormatting = function(S, K) {
  var count = 0;
  var res = "";
  for(var i = S.length - 1; i >=0; i--){
    count = 0;
    while(count < K && i >=0) {
      if(S[i] === '-') i--;
      else {
        if(S[i] >= 'a' && S[i] <= 'z'){
          res = S[i].toUpperCase() + res;
        }
        else res = S[i] + res;
        count++;
        i--;
      }
    }
    i++;
    res = '-' + res;
  }
  var j = 0;
  while(j < res.length && res[j] === '-') j++;
  res = res.toString().substring(j, res.length);
  return res;
};