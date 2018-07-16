/**
 * Created by lizhelin on 18/7/15.
 */
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) return false;
  var row = matrix.length;
  var col = matrix[0].length;
  for(var i = 0 ; i < row; i++) {
    if(target >= matrix[i][0] && target <= matrix[i][col - 1]){
      var left = 0
      var right = col - 1;
      while(left <= right) {
        var mid = left + parseInt((right - left) / 2);
        if(matrix[i][mid] < target) left = mid + 1;
        else if(matrix[i][mid] > target) right = mid - 1;
        else if(matrix[i][mid] === target) return true;
      }
      return false;
    }
  }
  return false;
};