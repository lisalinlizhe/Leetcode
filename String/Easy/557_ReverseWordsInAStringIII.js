/**
 * Created by llin on 5/31/18.
 */
var reverseWords = function(s) {
    var len = s.length;
    var reverse = "";
    for(var j = 0; j < s.length; j++){
        var index = j;
        while(j < s.length && s[j] !== " ") {
            j++;
        }
        reverse += reverseSingleWord(s.substring(index, j)) + " ";
    }
    return reverse.trim();
};

var reverseSingleWord = function(str) {
    var res = "";
    for(var i = str.length - 1; i>= 0; i--){
        res+= str[i];
    }
    return res;
}