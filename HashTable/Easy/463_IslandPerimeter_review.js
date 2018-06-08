/**
 * Created by llin on 6/7/18.
 */
// Did it yourself but slow （71.5%）

// efficient code (90%)

var islandPerimeter = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    var perimeter = 0;
    var island = 0;
    var connect = 0;
    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if(grid[i][j] === 1){
                island++;
                if(i + 1 < row && grid[i+1][j] === 1) connect++;
                if(j + 1 < col && grid[i][j+1] === 1) connect++;
            }
        }
    }
    return island* 4 - connect*2;
};


// my code (71.5%）:
// var islandPerimeter = function(grid) {
//     var row = grid.length;
//     var col = grid[0].length;
//     var map = {};
//     var perimeter = 0;
//     var number = 0;
//     for(var i = 0; i < row; i++) {
//         for(var j = 0; j < col; j++) {
//             number = numberOfIslandsAround(grid, i, j);
//             if(map[number] !== undefined) {
//                 map[number]++;
//             }
//             else map[number] = 1;
//         }
//     }
//     console.log(map);
//     var keys = Object.keys(map);
//     for(var m = 0; m < keys.length; m++){
//         var key = keys[m];
//         perimeter += key * map[key];
//     }
//     return perimeter;
// };
//
// var numberOfIslandsAround = function(grid, i, j){
//     if(grid[i][j] === 0) return 0;
//     var num = 4;
//     if(i - 1 >= 0 && grid[i-1][j] === 1) {
//         num--;
//     }
//     if(i + 1 < grid.length && grid[i+1][j] === 1) {
//         num--;
//     }
//     if(j - 1 >= 0 && grid[i][j-1] === 1) {
//         num--;
//     }
//     if(j + 1 < grid[0].length && grid[i][j+1] === 1) {
//         num--;
//     }
//
//     return num;
// };