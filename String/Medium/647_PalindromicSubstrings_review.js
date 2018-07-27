/**
 * Created by lizhelin on 18/7/26.
 */
//did it yourself but too slow, only 1 for loop
var countSubstrings = function(s) {
  var res = 0;
  for(var i = 0; i < s.length; i++) {
    res += count(s, i, i);
    res += count(s, i, i + 1);
  }
  return res;
};

var count = function(s, left, right){
  var c = 0;
  while(left >= 0 && right < s.length && s[left] === s[right]){
    c++;
    left--;
    right++;
  }
  return c;
}