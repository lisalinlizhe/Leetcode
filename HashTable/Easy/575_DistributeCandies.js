/**
 * Created by llin on 6/8/18.
 */
var distributeCandies = function(candies) {
    var len = candies.length;
    var map = {};
    var kinds = 0;
    for(var i = 0; i < len; i++) {
        if(map[candies[i] !== undefined]) {
            map[candies[i]]++;
        }
        else map[candies[i]] = 1;

    }
    var keys = Object.keys(map);
    if(keys.length * 2 <= len) return keys.length;
    else return len/2;
};