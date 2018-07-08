/**
 * Created by lizhelin on 18/7/7.
 */
//how to init a 2D array!!!!!!
var generateMatrix = function(n) {
  var matrix = [];
  for (var i = 0; i < n; i++) {
    matrix.push([]);
  }
  var num = 1;
  for(var i = 0; i < n; i++) {
    for(var j = i ; j < n - 1 - i ; j++){
      matrix[i][j] = num;
      num++;
    }
    for(var j = i ; j < n - i ; j++) {
      matrix[j][n - 1 - i] = num;
      num++;
    }
    for(var j = n - 2 - i; j >= i ; j--) {
      matrix[n - i - 1][j] = num;
      num++;
    }
    for(var j = n - 2 - i ; j > i ; j--) {
      matrix[j][i] = num;
      num++;
    }
  }
  return matrix;
};
