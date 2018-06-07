/**
 * Created by llin on 6/6/18.
 */
var findWords = function(words) {
    var map1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    var map2 = ["A","S","D","F","G","H","J","K","L"];
    var map3 = ["Z","X","C","V","B","N","M"];
    var map;
    var res = []
    for(var i = 0; i < words.length; i++){
        var item = words[i];
        if(map1.indexOf(item[0].toUpperCase()) !== -1) map = map1;
        else if(map2.indexOf(item[0].toUpperCase()) !== -1) map = map2;
        else map = map3;
        for(var j = 1; j < item.length ; j++) {
            if(map.indexOf(item[j].toUpperCase()) === -1) break;
        }
        map = [];
        if(j === item.length) res.push(item);
    }
    return res;
};