/**
 * Created by llin on 5/12/18.
 */
var isToeplitzMatrix = function(matrix) {
    var row = matrix.length;
    var colomn = matrix[0].length;
    for(var i = 0; i< row - 1 ; i++) {
        for(var j = 0; j < colomn - 1; j++){
            if(matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false;
            }
        }
    }
    return true;
}