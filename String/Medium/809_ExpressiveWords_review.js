/**
 * Created by lizhelin on 18/8/11.
 */
var expressiveWords = function(S, words) {
  var res = 0;
  for(var i = 0; i < words.length; i++) {
    if(isStretch(S, words[i])) res++;
  }
  return res;
};

var isStretch = function(s, word){
  var i = 0; j = 0;
  for(i; i< s.length;) {
    if(j < word.length && s[i] === word[j]) {
      i++;
      j++;
    }
    else if(i > 1 && s[i] === s[i - 1] && s[i] === s[i - 2]) i++;
    else if(i > 0 && s[i] === s[i - 1] && s[i] === s[i + 1]) i++;
    else return false;
  }
  return j === word.length;
};