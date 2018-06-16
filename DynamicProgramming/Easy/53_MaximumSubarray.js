/**
 * Created by lizhelin on 18/6/16.
 */
var maxSubArray = function(nums) {
  var len = nums.length;
  var max = nums[0];
  for(var i = 1; i < len; i++) {
    nums[i] = Math.max(nums[i],nums[i] + nums[i-1]);
    max = Math.max(max, nums[i]);
  }
  return max;
};