/**
 * Created by llin on 5/21/18.
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    var res = [[1]];
    for(var i = 1; i < numRows ; i++) {
        res[i] = [];
        for(j = 0; j < i + 1 ; j++) {
            if(j === i){
                res[i][j] = res[i-1][j-1];
            }
            else if(j === 0) {
                res[i][j] = res[i-1][j];
            }
            else {
                res[i][j] = res[i-1][j] + res[i-1][j-1];
            }
        }
    }
    return res;
};