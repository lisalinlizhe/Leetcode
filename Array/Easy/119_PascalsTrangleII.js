/**
 * Created by llin on 5/22/18.
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    var res = [[1]];
    var row = [];
    for(var i = 1; i < rowIndex + 1; i++ ){
        res[i] = [];
        for(var j = 0; j < i+ 1; j++) {
            if(j === 0 || j === i) res[i][j] = 1;
            else {
                res[i][j] = res[i-1][j-1] + res[i-1][j];
            }
        }
    }
    return res[rowIndex];
};