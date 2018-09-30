/**
 * Created by lizhelin on 18/9/29.
 */
var MyCalendar = function() {
  var map = [];
  this.map = map;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for(var i = 0; i < this.map.length; i++){
    var s = this.map[i][0];
    var e = this.map[i][1];
    if(Math.max(start, s) < Math.min(end, e)) return false;
  }
  var arr = [];
  arr.push(start);
  arr.push(end);
  this.map.push(arr);
  return true;
};