/**
 * Created by lizhelin on 18/6/12.
 */
//review the solution of bit manipulation!!!!!

var isPowerOfThree = function(n) {
  if(n === 1) return true;
  var index = 3;
  while(index < n) {
    index *= 3;
  }
  if(index === n) return true;
  return false;
};