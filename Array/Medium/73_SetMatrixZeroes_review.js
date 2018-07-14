/**
 * Created by lizhelin on 18/7/13.
 */
// review the follow up
var setZeroes = function(matrix) {
  var row = matrix.length;
  var col = matrix[0].length;
  var arrC = [];
  for(var i = 0; i < row; i++) {
    for(var j = 0 ; j < col ; j++) {
      if(matrix[i][j] === 0) {
        var index = 0;
        while(index < col){
          if(matrix[i][index] === 0) arrC.push(index);
          else matrix[i][index] = 0;
          index++;
        }
        arrC.push(j);
        break;
      }

    }
  }
  for(var k = 0; k < arrC.length; k++) {
    var column = arrC[k];
    for(var m = 0; m < row; m++) {
      matrix[m][column] = 0;
    }
  }
};