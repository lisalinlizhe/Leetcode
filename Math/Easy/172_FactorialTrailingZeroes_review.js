/**
 * Created by lizhelin on 18/6/13.
 */
var trailingZeroes = function(n) {
  var count = 0;
  while(n > 1){
    n = parseInt(n/5);
    count += n;
  }
  return count;
};