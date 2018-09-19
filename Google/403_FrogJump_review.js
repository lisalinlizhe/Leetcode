/**
 * Created by lizhelin on 18/9/19.
 */
var canCross = function(stones) {
  if(stones.length === 0 || stones[1] !== 1) return false;
  if(stones.length === 1) return true;
  if(stones.length === 2) return true;
  var last = stones[stones.length - 1];

  var map = [];
  for(var i = 0; i < stones.length; i++) {
    if(i > 3 && stones[i] > stones[i - 1] * 2) return false;

    map[stones[i]] = true;
  }
  return canReach(map, last, 1, 1);
};

var canReach = function(map, last, pos, jump){
  if(pos + jump - 1 == last || pos + jump == last || pos + jump + 1 == last) return true;
  if(map[pos + jump + 1] === true) {
    if(canReach(map, last, pos + jump + 1, jump + 1)) return true;
  }
  if(map[pos + jump] === true) {
    if(canReach(map, last, pos + jump, jump)) return true;
  }
  if(jump > 1 && map[pos + jump - 1] === true) {
    if(canReach(map, last, pos + jump - 1, jump - 1)) return true;
  }
  return false;
};