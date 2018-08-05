/**
 * Created by lizhelin on 18/8/5.
 */
var lengthOfLongestSubstring = function(s) {
  var map = {};
  var max = 0;
  var i = 0,j = 0;
  for(i; i < s.length; i++) {
    var index = s.indexOf(s[i], j) ;
    if(index !== -1 && index < i){
      var l = i - j;
      max= Math.max(max, l);
      j = index + 1;
    }
  }
  return Math.max(max, i - j);
};