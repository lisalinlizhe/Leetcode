/**
 * Created by llin on 5/31/18.
 */
var reverseString = function(s) {
    var len = s.length;
    res = "";
    for(var i = len - 1; i >= 0; i--){
        res += s[i];
    }
    return res;
};