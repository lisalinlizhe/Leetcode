/**
 * Created by lizhelin on 18/10/1.
 */
var MyCalendarTwo = function() {
  var cal = [];
  this.cal = cal;
  var overLap = [];
  this.overLap = overLap;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

MyCalendarTwo.prototype.book = function(start, end) {
  this.overLap = [];
  var s, e;
  for(var i = 0; i < this.cal.length; i++){
    s = Math.max(start, this.cal[i][0]);
    e = Math.min(end, this.cal[i][1]);
    if(s < e){
      if(this.myCal(s,e)) {
        return false;
      }
    }
  }
  this.cal.push([start, end]);
  return true;
};

MyCalendarTwo.prototype.myCal = function(startAtOverlap, endAtOverlap){
  var startDate, endDate;
  for(var i = 0; i < this.overLap.length; i++){
    startDate = Math.max(startAtOverlap, this.overLap[i][0]);
    endDate = Math.min(endAtOverlap, this.overLap[i][1]);
    if(startDate < endDate) return true;
  }
  this.overLap.push([startAtOverlap, endAtOverlap]);
  return false;
}