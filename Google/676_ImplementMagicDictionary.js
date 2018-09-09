/**
 * Created by lizhelin on 18/9/9.
 */
var map;
var MagicDictionary = function() {
  map = {};
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */

MagicDictionary.prototype.buildDict = function(dict) {
  for(var i = 0; i < dict.length; i++) {
    map[dict[i]] = true;
  }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  var keys = Object.keys(map);
  for(var k = 0; k < keys.length; k++) {
    var key = keys[k];
    var l = key.length;
    if(l !== word.length) continue;
    if(l === 1 && word[0] !== key[0]) return true;
    if(word[0] === key[0] || word[l - 1] === key[l - 1]){
      var cur = k;
      var diff = 0;
      for(var m = 0; m < l; m++) {
        if(word[m] !== key[m]) {
          diff++;
          if(diff > 1) break;
        }
      }
      if(diff === 1) return true;
      diff = 0;
    }
  }
  return false;
};