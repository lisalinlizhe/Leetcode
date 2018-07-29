/**
 * Created by lizhelin on 18/7/29.
 */
var findMinDifference = function(timePoints) {
  var count = 24 * 60;
  var arr = new Array(count).fill(false);
  for(var i = 0; i < timePoints.length; i++) {
    var time = timePoints[i].split(':');
    var h = parseInt(time[0]);
    var m = parseInt(time[1]);
    if(arr[h*60 + m]) return 0;
    arr[h*60 + m] = true;
  }

  var prev = 0;
  var res = Number.POSITIVE_INFINITY;
  var first = Number.POSITIVE_INFINITY, last = Number.NEGATIVE_INFINITY;
  for(var j = 0; j < count; j++) {
    if (arr[j] === true){
      if(first !== Number.POSITIVE_INFINITY){
        res = Math.min(res, j - prev);
      }
      first = Math.min(first, j);
      last = Math.max(last, j);
      prev = j;
    }
  }
  res = Math.min(res, (24 * 60 - last + first));

  return res;
};