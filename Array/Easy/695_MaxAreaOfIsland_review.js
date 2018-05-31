/**
 * Created by llin on 5/30/18.
 */

//Needs review - could not figure that out, directly copy from the discussion
//First problem using recursion
var maxAreaOfIsland = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    var res = 0;
    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++){
            res = Math.max(res, numOfIsland(grid, i, j));
        }
    }
    return res;
};

var numOfIsland = function(grid, i, j) {
    if(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === 1 ){
        grid[i][j] = 0;
        return 1 + numOfIsland(grid, i-1, j) + numOfIsland(grid, i+1, j) + numOfIsland(grid, i, j -1) + numOfIsland(grid, i, j +1);
    }
    return 0;
};