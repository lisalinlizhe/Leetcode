/**
 * Created by llin on 5/31/18.
 */
var toGoatLatin = function(S) {
    var vowel = ["a", "e", "i", "o", "u"];
    var word = "";
    var res = "";
    var numberOfWord = 1;
    for(var i = 0 ; i < S.length; i++) {
        var index = i;
        while(i < S.length && S[i] !== " ") {
            i++;
        }
        word = S.substring(index, i);
        if(vowel.indexOf(word[0].toLowerCase()) !== -1) {
            newWord = dealWithVowel(word);
            for(var j = 0; j < numberOfWord ; j++){
                newWord += "a";
            }
            numberOfWord++;
            res += newWord + " ";
        }
        else{
            newWord = dealWithConsonant(word);
            for(var j = 0; j < numberOfWord ; j++){
                newWord += "a";
            }
            numberOfWord++;
            res += newWord + " ";
        }
    }
    return res.trim();
};

var dealWithVowel = function(str) {
    return str + "ma";
};

var dealWithConsonant = function(str){
    str += str[0];
    return str.substring(1, str.length + 1) + "ma";
};