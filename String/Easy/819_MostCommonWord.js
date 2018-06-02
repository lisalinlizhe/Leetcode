/**
 * Created by llin on 6/1/18.
 */
var mostCommonWord = function(paragraph, banned) {
    var para = paragraph.toLowerCase().match(/\w+/g);
    var map = {};
    var res = "";
    var max = 0;
    for(var i = 0; i < para.length; i++) {
        if(banned.indexOf(para[i]) !== -1 ) continue;
        if(map[para[i]]!== undefined){
            map[para[i]]++;
            if(map[para[i]] > max) {
                max = map[para[i]];
                res = para[i];
            }
        }
        else {
            map[para[i]] = 1;
            if(max < 1) res = para[i];
        }
    }
    return res;
};