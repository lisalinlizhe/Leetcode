/**
 * Created by lizhelin on 18/6/11.
 */
var addDigits = function(num) {
  var digit = 0;
  var sum = getDigitsSum(num);
  while(sum >= 10) {
    sum = getDigitsSum(sum);
  }
  return sum;
};
var getDigitsSum = function(n) {
  var s = 0;
  var d = 0;
  while(n > 0) {
    s += (n % 10);
    n = parseInt(n/10);
  }
  return s;
};