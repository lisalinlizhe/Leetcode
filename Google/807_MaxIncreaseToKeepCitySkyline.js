/**
 * Created by lizhelin on 18/9/5.
 */
//How to get max value for each column - use HashMap.
var maxIncreaseKeepingSkyline = function(grid) {
  var viewFromTopBottom = [];
  var viewFromLeftRight = [];
  var row = grid.length;
  var col = grid[0].length;
  var max1 = 0;
  var max2 = 0;
  var map1 = {};
  var map2 = {};
  var sum = 0;
  for(var i = 0; i < row; i++) {
    for(var j = 0; j < col; j++) {

      if(grid[i][j] > max1) max1 = grid[i][j];
      if(map1[i] !== undefined) {
        if(grid[i][j] > map1[i]) map1[i] = grid[i][j];
      }
      else map1[i] = grid[i][j];
      if(map2[j] !== undefined) {
        if(grid[i][j] > map2[j]) map2[j] = grid[i][j];
      }
      else map2[j] = grid[i][j];
    }
    viewFromLeftRight.push(max1);
    max1 = 0;
  }
  var keys = Object.keys(map2);
  for(var k = 0; k < keys.length; k++) {
    viewFromTopBottom.push(map2[keys[k]]);
  };

  for(var i = 0; i < row; i++) {
    for(var j = 0; j < col ; j++) {
      if(Math.min(map1[i], map2[j]) - grid[i][j] > 0){
        sum += Math.min(map1[i], map2[j]) - grid[i][j];
      }
    }
  }
  return sum;
};