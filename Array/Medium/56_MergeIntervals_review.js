/**
 * Created by lizhelin on 18/7/24.
 */
//自己想出来的忒慢了
var merge = function(intervals) {
  var res = [];
  for(var i = 0; i < intervals.length - 1 ; i++) {
    for(var j = i + 1 ; j < intervals.length; j++) {
      if(isOverlap(intervals[i], intervals[j])) {
        intervals[j].start = Math.min(intervals[i].start, intervals[j].start);
        intervals[j].end = Math.max(intervals[i].end, intervals[j].end);
        intervals[i].merged = true;
        break;
      }
    }
  }
  for(var i = 0; i < intervals.length ; i++) {
    if(!intervals[i].merged) res.push(intervals[i]);
  }
  return res;
};

var isOverlap = function(interval1, interval2){
  return interval1.end >= interval2.start && interval1.end <= interval2.end || interval2.end >= interval1.start &&                    interval2.end <= interval1.end
};