/**
 * Created by lizhelin on 18/9/29.
 */
var isNStraightHand = function(hand, W) {
  if(W === 1) return true;
  hand = hand.sort(function(a,b){return a-b;});
  var map = {};
  for(var i = 0; i < hand.length; i++){
    if(map[hand[i]] != undefined) map[hand[i]]++;
    else map[hand[i]] = 1;
  }
  var count = 1;
  var group = 1;
  for(var j = 0; j < hand.length; j++){
    var cur = hand[j];
    if(map[cur] === 0) continue;
    count = 1;
    var n = cur;
    while(count < W) {
      var next = cur + 1;
      if(map[next] > 0) {
        count++;
        map[next]--;
        cur = next;
      }
      else {
        if(map[next] < 0) return false;
        break;
      }
    }
    if(count >= W) map[n]--;
  }
  var keys = Object.keys(map);
  for(var k = 0; k < keys.length; k++){
    var key = keys[k];
    if(map[key] > 0) return false;
  }
  return true;
};