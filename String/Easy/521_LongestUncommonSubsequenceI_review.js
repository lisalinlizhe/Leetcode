/**
 * Created by llin on 5/31/18.
 */

//My solution:
var findLUSlength = function(a, b) {
    if(b.length > a.length) {
        var temp = b;
        b = a;
        a = temp;
    }
    for(var i = 0; i < a.length; i++) {
        var subString =  a.substring(i, a.length);
        if(b.indexOf(subString) == -1) return subString.length;
    }
    return -1;
};


//Simple solution from Leetcode
// var findLUSlength = function(a, b) {
//     if (a === b) return -1
//     return Math.max(a.length, b.length)
// };