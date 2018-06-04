/**
 * Created by llin on 6/3/18.
 */
var addBinary = function(a, b) {
    var carry = 0;
    var len1 = a.length;
    var len2 = b.length;
    var sum = 0;
    var len = Math.max(len1, len2);
    res = "";
    for(var i = 0; i < len; i++) {
        var temp1 = i < len1 ? parseInt(a[len1 - 1 - i]) : 0;
        var temp2 = i < len2 ? parseInt(b[len2 - 1 - i]) : 0;
        var sum = temp1 + temp2 + carry;
        res = (sum === 1 || sum === 3 ? "1" : "0") + res;
        carry = sum > 1 ? 1 : 0;
    }
    if (carry) {
        res = carry + res;
    }
    return res;
};