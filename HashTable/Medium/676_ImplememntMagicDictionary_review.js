/**
 * Created by lizhelin on 18/8/28.
 */
//直接看的答案，需要注意的是：在构建map的时候 把word拆开当成key，把缺少的字符和位置当成value.
var map;
var MagicDictionary = function() {
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  map = {};
  for(var i = 0; i < dict.length; i++) {
    var s = dict[i];
    for(var j = 0; j < s.length ; j++) {
      var key = s.substring(0, j) + s.substring(j + 1);
      var arr = [];
      arr.push(j);
      arr.push(s[j]);

      if(map[key] !== undefined) map[key].push(arr);
      else{
        var temp = [];
        temp.push(arr);
        map[key] = temp;
      }
    }
  }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  for(var i = 0; i < word.length; i++) {
    var key = word.substring(0,i) + word.substring(i + 1);
    if(map[key] !== undefined){
      var pairs = map[key];
      for(var m = 0; m < pairs.length; m++) {
        if(pairs[m][0] === i && pairs[m][1] !== word[i]) return true;
      }
    }
  }
  return false;
};