/**
 * Created by lizhelin on 18/6/16.
 */
var climbStairs = function(n) {
  if(n <= 2) return n;
  var arr = new Array(n);
  arr[0] = 1;
  arr[1] = 2;
  for(var i = 2; i < n ; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n-1];
};