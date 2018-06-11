/**
 * Created by lizhelin on 18/6/10.
 */
    // Need to learn set before reviewing this
var wordPattern = function(pattern, str) {
  var map = {};
  var arr = new Array(256).fill(0);
  str = str.split(' ');
  if(str.length !== pattern.length) return false;
  for(var i = 0; i < pattern.length; i++) {
    if(map[str[i]] === undefined){
      map[str[i]] =0;
    }
    if(arr[pattern[i].charCodeAt(0)] !== map[str[i]]) return false;
    arr[pattern[i].charCodeAt(0)] = i + 1;
    map[str[i]] = i + 1;
  }
  return true;
};