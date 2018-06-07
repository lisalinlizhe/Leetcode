/**
 * Created by llin on 6/6/18.
 */
var numJewelsInStones = function(J, S) {
    var map = {};
    res = 0;
    for(var i = 0; i < J.length ; i++){
        map[J[i]] = true;
    }
    for(var j = 0 ; j < S.length; j++) {
        if(map[S[j]] !== undefined) res++;
    }
    return res;
};