/**
 * Created by lizhelin on 18/7/4.
 */
var uniquePaths = function(m, n) {
  var arr = [];
  for(var i = 0; i < m;i++){
    var newArr = new Array(n);
    arr[i] = newArr;
  }
  for(var j = 0; j < m ; j++) {
    for(var k = 0; k < n; k++) {
      if(k === 0 || j === 0) arr[j][k] = 1;
      else arr[j][k] = arr[j-1][k] + arr[j][k-1];
    }
  }
  return arr[m-1][n-1];
};