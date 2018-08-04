/**
 * Created by lizhelin on 18/8/3.
 */
var checkValidString = function(s) {
  var sum = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '*') {
      sum ++;
    } else {
      sum --;
    }
    if (sum < 0) {
      return false
    }
  }
  sum = 0;
  for (var i = s.length - 1; i >=0; i--) {
    if (s[i] === ')' || s[i] === '*') {
      sum ++;
    } else {
      sum --;
    }
    if (sum < 0) {
      return false;
    }
  }
  return true;
};