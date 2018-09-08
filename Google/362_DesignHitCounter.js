/**
 * Created by lizhelin on 18/9/7.
 */
var map;
var HitCounter = function() {
  map = {};
};

/**
 * Record a hit.
 @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  if(map[timestamp] !== undefined) map[timestamp]++;
  else map[timestamp] = 1;
};

/**
 * Return the number of hits in the past 5 minutes.
 @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  var keys = Object.keys(map);
  var k, res = 0;
  if(timestamp > 300) {
    var start = timestamp - 300;
    for(k = 0; k < keys.length; k++) {
      if(keys[k] > start) break;
    }
    for(k; k < keys.length; k++){
      res += map[keys[k]];
    };
  }
  else{
    for(var m = 0; m < keys.length; m++) {
      res += map[keys[m]];
    }
  }
  return res;

};
