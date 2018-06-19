/**
 * Created by lizhelin on 18/6/18.
 */
//Need to think about 溢出 issue, diff between >> and >>> ???
var hammingWeight = function(n) {
  var count = 0;
  while(n !== 0) {
    count += (n & 1);
    n >>>= 1;
  }
  return count;
};