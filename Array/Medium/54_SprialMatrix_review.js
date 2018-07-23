/**
 * Created by lizhelin on 18/7/22.
 */
//第三第四个for循环的条件!!
var spiralOrder = function(matrix) {
  if(matrix.length === 0) return [];
  var row1 = 0, col1 = 0;
  var row = matrix.length - 1;
  var col = matrix[0].length - 1;
  var res = [];
  while(row1 <= row && col1 <= col){
    //left to right
    for(var i = col1; i <=col; i++) {
      res.push(matrix[row1][i]);
    }
    row1++;
    //top to bottom;
    for(var i = row1; i <= row; i++) {
      res.push(matrix[i][col]);
    }
    col--;

    if(row >= row1){
      //right to left
      for(var i = col; i>= col1; i--) {
        res.push(matrix[row][i]);
      }
      row--;
    }

    if(col >= col1){
      //bottom to up
      for(var i = row; i>= row1; i-- ){
        res.push(matrix[i][col1]);
      }
      col1++;
    }
  }
  return res;
};