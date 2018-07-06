/**
 * Created by lizhelin on 18/7/5.
 */
// not able to figure out yourself
var rotate = function(matrix) {
  var l = parseInt(matrix.length / 2);
  for(var i = 0; i < l ; i++) {
    var first = i;
    var last = matrix.length - 1 - first;
    for(var j = first; j < last; j++) {
      var offset = j - first;
      var temp =  matrix[first][j] ;
      matrix[first][j] = matrix[last - offset][first] ;
      matrix[last - offset][first] = matrix[last][last - offset] ;
      matrix[last][last - offset] = matrix[j][last] ;
      matrix[j][last] = temp ;
    }
  }
};