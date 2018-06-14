/**
 * Created by lizhelin on 18/6/13.
 */
var judgeSquareSum = function(c) {
  var left = 0;
  var right = parseInt(Math.sqrt(c)) + 1;
  while(left <= right) {
    if(left * left + right * right > c) right--;
    else if(left * left + right * right < c) left++;
    else if (left * left + right * right === c) return true;
  }
  return false;
};