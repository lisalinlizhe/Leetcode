/**
 * Created by lizhelin on 18/6/14.
 */
var convertToTitle = function(n) {
  var res = "";
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while(n > 0){
    var temp = n % 26;
    if(temp === 0) {
      res = 'Z' + res;
      n = n - 26;
    }
    else res = str[temp - 1] + res;
    n = parseInt(n/26);
  }
  return res;
};