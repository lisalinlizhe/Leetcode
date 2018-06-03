/**
 * Created by llin on 6/3/18.
 */
// Did it yourself but too slow
var repeatedSubstringPattern = function(s) {
    var len = s.length;
    if(len <= 1) return false;
    var sub = "";
    var str2 = "";
    var subLen = 0;
    var index = 1;
    var i = 0;
    while(index <= len/2){
        sub = s.substring(0, index);
        subLen = sub.length;
        str2 = s.substring(subLen, 2 * subLen);
        while(sub === str2){
            i = i + subLen;
            if(i >= len)  return true;
            if(i + subLen > len) return false;
            str2 = s.substring(i, i + subLen);
        }
        i = 0;
        index += 1;
    }
    return false;
};

// faster version:
// var repeatedSubstringPattern = function(s) {
//     if (s.length === 0) return false;
//     var s1 = s + s;
//     var s2 = s1.substring(1, s1.length - 1);
//     return s2.includes(s);
// };