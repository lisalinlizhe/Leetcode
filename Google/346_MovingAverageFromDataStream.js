/**
 * Created by lizhelin on 18/9/5.
 */
var arr;
var MovingAverage = function(size) {
  arr = [];
  this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  var sum = 0;
  if(arr.length < this.size) {
    arr.push(val);
  }
  else {
    arr.shift();
    arr.push(val);
  }
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
};
