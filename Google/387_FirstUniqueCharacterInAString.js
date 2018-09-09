/**
 * Created by lizhelin on 18/9/9.
 */
var firstUniqChar = function(s) {
  var map = {};
  for(var i = 0; i < s.length; i++){
    if(map[s[i]] !== undefined) map[s[i]] = false;
    else map[s[i]] = i;
  }
  var res = s.length + 1;
  var keys = Object.keys(map);
  for(var j = 0; j < keys.length;j++) {
    if(map[keys[j]] !== false){
      res = Math.min(res, map[keys[j]]);
    }
  }
  return res > s.length ? -1 : res;
};