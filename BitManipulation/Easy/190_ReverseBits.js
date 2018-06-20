/**
 * Created by lizhelin on 18/6/19.
 */
var reverseBits = function(n) {
  var res = 0;
  for(var i = 0; i < 32; i++) {
    res = res << 1 | (n & 1);
    n >>>= 1;
  }
  return res>>>0;
};