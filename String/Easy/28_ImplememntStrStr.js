/**
 * Created by llin on 6/3/18.
 */
var strStr = function(haystack, needle) {
    var len = haystack.length;
    var len1 = needle.length;
    for(var i = 0; i < len - len1 + 1; i++) {
        if((i + len1) <= len && haystack.substring(i, i + len1) === needle) {
            return i;
        }
    }
    return -1;
};