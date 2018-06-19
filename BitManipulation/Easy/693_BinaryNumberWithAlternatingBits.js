/**
 * Created by lizhelin on 18/6/18.
 */
//How to define alternating bits.
var hasAlternatingBits = function(n) {
  n = n ^ (n >> 1);
  return (n & (n + 1)) === 0;
};