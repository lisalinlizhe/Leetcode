/**
 * Created by lizhelin on 18/7/14.
 */
var numMatchingSubseq = function(S, words) {
  var count =  0;
  for(var i = 0; i < words.length; i++) {
    if(helper(words[i], S)) count++;
  }
  return count;
};

var helper = function(word, s){
  var index = -1;
  for(var j = 0; j < word.length; j++) {
    var char = word[j];
    index = s.indexOf(char, index + 1);
    if(index < 0) return false;
  }
  return true;
};