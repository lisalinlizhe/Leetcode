/**
 * Created by lizhelin on 18/9/18.
 */
//还是没想出来
var merge = function(intervals) {
  var res = [];
  for(var i = 0; i < intervals.length - 1; i++){
    for(var j = i + 1; j < intervals.length ; j++){
      if(hasOverLap(intervals[i], intervals[j])){
        intervals[j].start = Math.min(intervals[i].start, intervals[j].start);
        intervals[j].end = Math.max(intervals[i].end, intervals[j].end);
        intervals[i].merged = true;
        break; // important
      }
    }
  }
  for(var i = 0; i < intervals.length ; i++) {
    if(!intervals[i].merged) res.push(intervals[i]);
  }
  return res;
};

var hasOverLap = function(interval1, interval2){
  return interval1.end >= interval2.start && interval1.end <= interval2.end || interval2.end >= interval1.start && interval2.end <= interval1.end
};
