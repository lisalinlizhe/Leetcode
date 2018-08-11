/**
 * Created by lizhelin on 18/8/11.
 */
var findLUSlength = function(strs) {
  strs.sort(function(a,b) {return b.length - a.length;});
  var dupe = getDupe(strs);


  for(var j = 0; j < strs.length; j++) {
    if(dupe.indexOf(strs[j]) === -1){
      if(j === 0) return strs[0].length;
      else {
        for(var k = 0; k < j; k++) {
          if(isSubstring(strs[k], strs[j])) break;
          if(k === j - 1) return strs[j].length;
        }
      }
    }
  }
  return -1;
};

var isSubstring = function(a, b){
  var i = 0, j = 0;
  while(i < a.length && j < b.length) {
    if(a[i] == b[j]) j++;
    i++;
  }
  return j == b.length;
};

var getDupe = function(strs){
  var map = {};
  var dupeArray = [];
  for(var i = 0; i < strs.length; i++) {
    if(map[strs[i]]) dupeArray.push(strs[i]);
    else map[strs[i]] = 1;
  }
  return dupeArray;
};