/**
 * Created by llin on 6/2/18.
 */
var reverseStr = function(s, k) {
    var len = s.length;
    var round = parseInt(len/(2*k));
    result = "";
    for(var i = 0; i < round ; i++) {
        result += reveres(s.substring(k* 2 *i, k * 2 *(i+1)), k);
    }
    var lastPart = s.substring(len - len%(2*k), len);
    if(lastPart.length >= k) {
        result += reveres(lastPart, k);
        return result;
    }
    else return result += lastPart.split('').reverse().join('');
};

var reveres = function(s, k) {
    var temp = "";
    var res = "";
    temp = s.substring(0, k);
    res = res + temp.split('').reverse().join('') + s.substring(k, 2*k);
    return res;
};