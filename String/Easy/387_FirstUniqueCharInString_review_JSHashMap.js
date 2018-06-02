/**
 * Created by llin on 6/1/18.
 */

// Did it myself but need to google how to traverse a hashmap in JS
var firstUniqChar = function(s) {
    var len = s.length;
    var map = {};
    for(var i = 0; i < len; i++) {
        if(map[s[i]] !== undefined) {
            if(map[s[i]] > 1) continue;
            map[s[i]]++;
        }
        else{
            map[s[i]] = 1;
        }
    }
    var keys = Object.keys(map);
    for(var j = 0; j <keys.length; j++){
        if(map[keys[j]] === 1){
            return s.indexOf(keys[j]);
        }
    }
    return -1;
};