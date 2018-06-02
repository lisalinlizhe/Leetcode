/**
 * Created by llin on 6/1/18.
 */
//hard to understand the solution?????
var countBinarySubstrings = function(s) {
    var len = s.length;
    var prevCount = 1;
    var currentCount = 1;
    var res = 0;
    for(var i = 1; i < len; i++){
        if(s[i - 1] === s[i]) currentCount++;
        else {
            prevCount = currentCount;
            currentCount = 1;
        }
        if(prevCount >= currentCount) res++;
    }
    return res;
};