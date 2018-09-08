/**
 * Created by lizhelin on 18/9/7.
 */
var countCornerRectangles = function(grid) {
  var row = grid.length;
  var col = grid[0].length;
  var res = 0;
  for(var i = 0; i < row; i++) {
    for(var j = 0; j < col; j++) {
      if(grid[i][j] === 1) {
        for(var m = j + 1; m < col; m++) {
          if(grid[i][m] === 1) {
            for(var n = i + 1; n < row; n++) {
              if(grid[n][m] === 1 && grid[n][j] === 1) {
                res++;
              }
            }
          }
        }
      }
    }
  }
  return res;
};