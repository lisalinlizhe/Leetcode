/**
 * Created by lizhelin on 18/9/6.
 */
var isToeplitzMatrix = function(matrix) {
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[0].length; j++) {
      var n = matrix[i][j];
      var temp1 = i;
      var temp2 = j;
      while(temp1 < matrix.length - 1 && temp2 < matrix[0].length - 1) {

        if(matrix[temp1 + 1][temp2 + 1] !== n) return false;
        temp1++;
        temp2++;
      }
    }
  }
  return true;
};
