/**
 * Created by llin on 6/3/18.
 */
var repeatedStringMatch = function(A, B) {
    var count = 1;
    A1 = A;
    while(A1.length < B.length) {
        A1 = A1 + A;
        count++;
    }
    if(A1.indexOf(B) !== -1) return count;
    A1 = A1 + A;
    if(A1.indexOf(B) !== -1) return count + 1;
    return -1;
};