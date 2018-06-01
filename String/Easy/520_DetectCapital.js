/**
 * Created by llin on 5/31/18.
 */
var detectCapitalUse = function(word) {
    var fisrtWordCapital = false;
    var j = 1;
    var k = 1;
    var m = 1;
    if(captital(word[0])) {
        fisrtWordCapital = true;
    }
    if(fisrtWordCapital){
        var allCap = captital(word[1]);
        for(var i = 1; i < word.length; i++){
            if(allCap) {
                while(k < word.length){
                    if(lowerCase(word[k])) return false;
                    k++;
                }
            }
            else {
                while(m < word.length) {
                    if(captital(word[m])) return false;
                    m++;
                }
            }
        }
    }
    else{
        while(j < word.length) {
            if(captital(word[j])) return false;
            j++;
        }
    }
    return true;
};

var captital = function(char) {
    return (char >= 'A' && char<= 'Z');
};

var lowerCase = function(char) {
    return (char >= 'a' && char<= 'z');
};