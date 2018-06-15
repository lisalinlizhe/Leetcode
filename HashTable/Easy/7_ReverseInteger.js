/**
 * Created by lizhelin on 18/6/14.
 */
var reverse = function(x) {
  if(x === 0) return 0;
  var res = 0;
  var isNeg = x > 0? false : true;
  x = Math.abs(x);
  while(x > 0) {
    var temp = x % 10;
    res = res * 10 + temp;
    x = parseInt(x/10);
  }
  res = isNeg ? -res: res;
  if(res >= Math.pow(2, 31) - 1 || res <= -Math.pow(2,31)) return 0;
  return res;
};
