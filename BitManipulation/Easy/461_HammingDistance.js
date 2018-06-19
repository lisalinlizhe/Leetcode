/**
 * Created by lizhelin on 18/6/18.
 */
    // how to count 1 in a number: let it & 1.
var hammingDistance = function(x, y) {
  var xor = x ^ y;
  count = 0;
  for(var i = 0; i < 32; i++) {
    count += (xor >> i) & 1;
  }
  return count;
};