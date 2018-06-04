/**
 * Created by llin on 6/3/18.
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    if(strs.length === 1) return strs[0];
    var res = strs[0];
    for(var i = 1; i < strs.length ; i++) {
        if(strs[i].slice(0, res.length) !== res) {
            res = res.slice(0, res.length - 1);
            i = 0;
        }
        if(res.length === 0)  return "";
    }
    return res;
};