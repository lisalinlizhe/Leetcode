/**
 * Created by lizhelin on 18/9/5.
 */
var uniqueMorseRepresentations = function(words) {
  var dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  var map = {};
  var morse = "";
  var res = 0;
  for(var i = 0; i < words.length; i++) {
    var word = words[i];
    for(var j = 0; j < word.length; j++) {
      var idx = word[j].charCodeAt(0) - 'a'.charCodeAt(0);
      morse += dict[idx];
    }
    if(map[morse] === undefined) {
      res++;
      map[morse] = true;
    }
    morse = "";
  }
  return res;
};