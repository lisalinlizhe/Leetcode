/**
 * Created by llin on 5/12/18.
 */
var imageSmoother = function(M) {
    var row = M.length;
    var col = M[0].length;
    var arr = [];

    for(var i = 0; i < row; i++ ){
        arr[i] = [];
        for(var j = 0; j < col; j++){
            arr[i][j] = ave(i, j, M);
        }
    }
    return arr;
};

var ave = function(x, y, M) {
    var totalNumber = 0;
    var sum = 0;
    var row = M.length;
    var col = M[0].length;
    //STUCK here: how to know which items to add?
    for(var i = -1 ; i <= 1; i++){
        for(var j = -1; j <= 1; j++){
            if(x + i < 0 || x + i >= row || y + j < 0 || y + j >= col) {continue;}
            totalNumber++;
            sum += M[x + i][y + j];
        }
    }
    return parseInt(sum/totalNumber);
};

//question: How to create a 2D array with specific row and column???????


//why does parseInt/Math.floor matter the results (it will not matter)? ->
//its because we cannot declare as var arr = M, it will overwrite the original M array.