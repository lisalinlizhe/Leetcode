/**
 * Created by lizhelin on 18/6/10.
 */
var isIsomorphic = function(s, t) {
  var arr1 = new Array(256).fill(0);
  var arr2 = new Array(256).fill(0);

  for(var i = 0; i < s.length; i++) {
    if(arr1[s[i].charCodeAt(0)] !== arr2[t[i].charCodeAt(0)]) return false;
    arr1[s[i].charCodeAt(0)] = i + 1;
    arr2[t[i].charCodeAt(0)] = i + 1;
  }

  return true;
};