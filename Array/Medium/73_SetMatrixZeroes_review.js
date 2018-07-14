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


// faster one with o(1) space
//var setZeroes = function(matrix) {
//  var row = matrix.length;
//  var col = matrix[0].length;
//  var col0 = -1;
//  for(var i = 0; i < row; i++) {
//    if(matrix[i][0] === 0) col0 = 0;
//    for(var j = 1 ; j < col ; j++) {
//      if(matrix[i][j] === 0) {
//        matrix[i][0] = matrix[0][j] = 0;
//      }
//    }
//  }
//  for(var i = row - 1; i >= 0 ; i--) {
//    for(var j = col - 1; j >= 1; j--) {
//      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
//        matrix[i][j] = 0;
//      }
//    }
//    if(col0 === 0) matrix[i][0] = 0;
//  }
//};
