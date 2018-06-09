/**
 * Created by llin on 6/8/18.
 */
var longestPalindrome = function(s) {
    var len = s.length;
    var map = {};
    var count = 0;
    for(var i = 0; i < len; i++) {
        if(map[s[i]] !== undefined) {
            map[s[i]]++;
        }
        else map[s[i]] = 1;
    }
    var keys = Object.keys(map);
    for(var j = 0; j < keys.length ; j++) {
        var char = keys[j];
        if(map[char] % 2 !== 0) {
            count++;
        }
    }

    return count === 0 ? len - count : len - count + 1
};