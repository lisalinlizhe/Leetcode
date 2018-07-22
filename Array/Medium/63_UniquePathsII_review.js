/**
 * Created by lizhelin on 18/7/21.
 */
//Use only 1 array
var uniquePathsWithObstacles = function(obstacleGrid) {
  var row = obstacleGrid.length;
  var col = obstacleGrid[0].length;
  var arr = new Array(col).fill(0);
  arr[0] = 1;
  var index = 0;
  for(var i = 0; i < row; i++) {
    index = 0;
    for(var j = 0; j < col; j++) {
      if(obstacleGrid[i][j] === 1) arr[index] = 0;
      else if(index > 0) arr[index] += arr[index - 1];
      index++;
    }
  }
  return arr[arr.length - 1];
};
