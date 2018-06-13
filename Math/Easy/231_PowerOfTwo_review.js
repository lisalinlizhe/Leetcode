/**
 * Created by lizhelin on 18/6/12.
 */
    // review the solution of Bit Manipulation!!!!!!!
var isPowerOfTwo = function(n) {
  if(n === 1) return true;
  var index = 2;
  while(index < n) {
    index *= 2;
  }
  if(index === n) return true;
  return false;
};