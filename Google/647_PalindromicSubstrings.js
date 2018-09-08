/**
 * Created by lizhelin on 18/9/7.
 */
var countSubstrings = function(s) {
  var res = 0;
  for(var i = 0; i < s.length; i++) {
    res += countPalindromic(s, i, i);
    res += countPalindromic(s, i, i + 1);
  }
  return res;
};

var countPalindromic = function(s, left, right){
  var count = 0;
  while(left >= 0 && right < s.length) {
    if(s[left] !== s[right]) break;
    left--;
    right++;
    count++;
  }
  return count;
};