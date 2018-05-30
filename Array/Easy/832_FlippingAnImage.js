/**
 * Created by llin on 5/25/18.
 */
var flipAndInvertImage = function(A) {
    var row = A.length;
    var col = A[0].length;
    for(var i = 0; i < row; i++) {
        var reversedA = A[i].reverse();
        A[i] = invert(reversedA);
    }
    return A;
};

var invert = function(arr){
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] === 0){
            arr[j] = 1;
        }
        else arr[j] = 0;
    }
    return arr;
};