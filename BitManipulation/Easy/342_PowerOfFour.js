/**
 * Created by lizhelin on 18/6/18.
 */
//if is power of 2 and can divide 3.
var isPowerOfFour = function(num) {
  if(num <= 0) return false;
  var isPowerOfTwo = (num & (num - 1)) === 0;
  var isEvenZeros = (num - 1) % 3 === 0;
  return isPowerOfTwo && isEvenZeros;
};