/**
 * Created by lizhelin on 18/9/8.
 */
var titleToNumber = function(s) {
  var i;
  var n=0;
  for (i = 0; i < s.length; i++) {
    n = n * 26 + (s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1);
  }
  return n;
};
