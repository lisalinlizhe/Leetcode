/**
 * Created by lizhelin on 18/6/17.
 */
var findContentChildren = function(g, s) {
  s = s.sort(function(a,b) {return a-b;});
  g = g.sort(function(a,b) {return a-b;});
  var i = 0;
  var j = 0;
  while(i < g.length && j < s.length) {
    if(g[i] <= s[j]) {
      i++;
      j++;
    }
    else j++;
  }
  return i;
};