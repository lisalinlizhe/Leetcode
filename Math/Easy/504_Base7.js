/**
 * Created by lizhelin on 18/6/27.
 */
var convertToBase7 = function(num) {
  if(num === 0) return "0";
  var res = "";
  var positive = true;
  if(num < 0) {
    positive = false;
    num = - num;
  }
  while(num > 0) {
    res = num % 7 + res;
    num = parseInt(num/7);
  }
  if(!positive) res = '-' + res;
  return res;
};