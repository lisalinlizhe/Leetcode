/**
 * Created by lizhelin on 18/9/9.
 */
var isAnagram = function(s, t) {
  var arr = new Array(256).fill(0);
  if(s.length !== t.length) return false;
  for(var i = 0; i < s.length; i++) {
    var idx1 = s[i].charCodeAt(0);
    var idx2 = t[i].charCodeAt(0);
    arr[idx1] += 1;
    arr[idx2] -= 1;
  }

  for(var j = 0; j < 256; j++){
    if(arr[j] !== 0) return false;
  }
  return true;
};