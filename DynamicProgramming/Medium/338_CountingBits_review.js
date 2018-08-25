/**
 * Created by lizhelin on 18/8/25.
 */
//could not figure out yourself
var countBits = function(num) {
  var arr = new Array(num + 1).fill(0);
  for(var i = 1; i <= num; i++) {
    arr[i] = arr[i >> 1] + (i & 1);
  }
  return arr;
};