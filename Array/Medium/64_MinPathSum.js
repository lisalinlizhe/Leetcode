/**
 * Created by lizhelin on 18/7/8.
 */
var minPathSum = function(grid) {
  var row = grid.length;
  var col = grid[0].length;
  for(var i = 0; i < row; i++){
    for(var j = 0; j < col; j++) {
      if(i === 0 && j === 0) continue;
      else if(i === 0) grid[i][j] = grid[i][j] + grid[i][j - 1];
      else if(j === 0) grid[i][j] = grid[i][j] + grid[i - 1][j];
      if(i !== 0 && j !== 0) {
        grid[i][j] = Math.min(grid[i][j] + grid[i - 1][j], grid[i][j]+grid[i][j - 1]);
      }
    }
  }
  return grid[row - 1][col - 1]
};