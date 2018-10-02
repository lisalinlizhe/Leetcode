/**
 * Created by lizhelin on 18/9/16.
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  var max = 0;
  var l = 0;
  var diff = 0;
  var map = {};
  for(var i = 0; i < s.length; i++) {
    diff = 0;
    var idx = i;
    while(diff <= 2 && idx < s.length){
      if(map[s[idx]] !== undefined) {
        l++;
        map[s[idx]] = idx;
        idx++;
      }
      else if(diff === 2) break;
      else {
        map[s[idx]] = idx;
        diff++;
        idx++;
        l++;
      }
    }
    max = Math.max(max, l);
    map = {};
    l = 0;
  }
  return max;
};