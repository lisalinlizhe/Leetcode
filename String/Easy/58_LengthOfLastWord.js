/**
 * Created by llin on 6/3/18.
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ");
    return s[s.length - 1].length;
};