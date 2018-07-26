/**
 * Created by lizhelin on 18/7/25.
 */
var numFriendRequests = function(ages) {
  var map = {};
  for(var i = 0; i < ages.length; i++) {
    if(map[ages[i]] !== undefined) map[ages[i]]++;
    else map[ages[i]] = 1;
  }
  var res = 0;
  var keys = Object.keys(map);
  for(var j = 0; j < keys.length; j++) {
    for(var k = 0; k < keys.length; k++) {
      if(canRequest(parseInt(keys[j]), parseInt(keys[k]))) {
        var minus = 0;
        if(parseInt(keys[j]) === parseInt(keys[k])) minus = 1;
        res += map[keys[j]] * (map[keys[k]] - minus);
      }
    }
  }
  return res;
};

var canRequest = function(A, B){
  if(B <= 0.5 * A + 7 || B > 100 && A < 100 || B > A) return false;
  return true;
}