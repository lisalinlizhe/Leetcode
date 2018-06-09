/**
 * Created by llin on 6/8/18.
 */
// Mine is super super super slow

var longestWord = function(words) {
    var len = words.length;
    var word = "";
    for(var i = 0; i < len; i++) {
        if(words[i].length > word.length || (words[i].length === word.length && words[i] < word)){
            var flag = true;
            for (var j = 1; j < words[i].length ; j++) {
                if (words.indexOf(words[i].slice(0, j)) === -1){
                    flag = false;
                    break;
                }
            }
            if(flag){
                word =  words[i];
            }
        }
    }
    return word;
};
