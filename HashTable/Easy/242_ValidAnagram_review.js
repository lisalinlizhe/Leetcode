/**
 * Created by llin on 6/8/18.
 */

//Did it yourself but super slow. Letters -> thinks of an array has 26 items
// Also, 2 methods: s[i].charCodeAt(0) and arr.fill(0)!!!!!!!!!
    
var isAnagram = function(s, t) {
    var len1 = s.length;
    var len2 = t.length;
    if(len1 !== len2) return false;
    var arr = new Array(26);
    arr.fill(0);
    for(var i = 0; i < len1; i++) {
        var index1 = s[i].charCodeAt(0) - "a".charCodeAt(0);
        var index2 = t[i].charCodeAt(0) - "a".charCodeAt(0);
        arr[index1]++;
        arr[index2]--;
    }
    for(var j = 0; j < 26; j++) {
        if(arr[j] !== 0) return false;
    }
    return true;
};