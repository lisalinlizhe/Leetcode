/**
 * Created by lizhelin on 18/8/2.
 */
var longestPalindrome = function(s) {
  var res = 0;
  var str = "";
  for(var i = 0; i < s.length - 1 ; i++) {
    var l1 = l(s, i, i);
    if(l1.length > res) {
      res = l1.length;
      str = l1;
    }
    var l2 = l(s, i, i+ 1) ;
    if(l2.length > res) {
      res = l2.length;
      str = l2;
    }
  }
  return str;
};

var l = function(s, left, right) {
  var count = 0;
  while(left >= 0 && right < s.length) {
    if(s[left] !== s[right]) break;
    left--;
    right++;
    count++
  }
  return s.substring(left + 1, right );
}