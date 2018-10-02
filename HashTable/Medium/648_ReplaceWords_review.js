/**
 * Created by lizhelin on 18/8/28.
 */
//自己做出来但是太慢了
//自己的：
/*
 var replaceWords = function(dict, sentence) {
 var res = "";
 sentence = sentence.split(' ');
 for(var i = 0; i < sentence.length; i++){
 var word = sentence[i];
 for(var j = 0 ; j < dict.length; j++) {
 if(word.indexOf(dict[j]) === 0) {
 console.log(word.indexOf(dict[j]));
 res += dict[j] + ' ';
 break;
 }
 }
 if(j === dict.length) res += word + ' ';
 }
 return res.trim();
 };

 */

var replaceWords = function(dict, sentence) {
  dict.sort();
  var unsortedParts = sentence.split(" ");
  var parts = unsortedParts.slice();
  parts.sort();

  var i = j = 0;
  var rootMap = {};
  while (i < dict.length && j < parts.length) {
    var part = parts[j];
    var root = dict[i];
    if (root > part) {
      j++;
    } else {
      if (part.startsWith(root)) {
        rootMap[part] = root;
        j++;
      } else {
        i++;
      }
    }
  }
  for (i = 0; i < unsortedParts.length; i++) {
    if (rootMap[unsortedParts[i]]) {
      unsortedParts[i] = rootMap[unsortedParts[i]];
    }
  }
  return unsortedParts.join(' ');
};