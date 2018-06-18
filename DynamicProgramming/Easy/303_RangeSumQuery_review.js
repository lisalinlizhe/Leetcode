/**
 * Created by lizhelin on 18/6/17.
 */
var NumArray = function(nums) {
  this.sumArray = [];
  var sum = 0;
  for(var i = 0; i < nums.length ; i++) {
    sum += nums[i];
    this.sumArray.push(sum);
  }

};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if(i === 0){
    return this.sumArray[j];
  }else {
    return this.sumArray[j] - this.sumArray[i - 1];
  }
};