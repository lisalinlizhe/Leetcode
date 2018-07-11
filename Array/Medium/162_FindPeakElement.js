/**
 * Created by lizhelin on 18/7/10.
 */
var findPeakElement = function(nums) {
  var index = 0;
  while(index < nums.length && nums[index] < nums[index + 1]){
    index++;
  }
  return index;
};