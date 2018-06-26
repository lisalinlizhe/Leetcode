/**
 * Created by lizhelin on 18/6/25.
 */
var uniqueMorseRepresentations = function(words) {
  var hashMap = {};
  var res = "";
  var map = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  for(var i = 0; i < words.length; i++) {
    res = "";
    for(var j = 0; j < words[i].length; j++) {
      var index = words[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
      res += map[index];
    }
    if(hashMap[res] === undefined) {
      hashMap[res] = 1;
    }
    else {
      hashMap[res]++;
    }
  }
  console.log(hashMap);
  var keys = Object.keys(hashMap);
  return keys.length;
};