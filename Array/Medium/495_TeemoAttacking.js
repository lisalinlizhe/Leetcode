/**
 * Created by lizhelin on 18/6/29.
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if(timeSeries.length === 0) return 0;
  var l = timeSeries.length;
  var res = duration;
  for(var i = 0; i < l - 1; i++) {
    if(timeSeries[i + 1] - timeSeries[i] >= duration) res += duration;
    else res += timeSeries[i + 1] - timeSeries[i];
  }
  return res;
};