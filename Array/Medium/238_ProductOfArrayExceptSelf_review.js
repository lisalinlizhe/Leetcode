/**
 * Created by lizhelin on 18/7/1.
 */
//Could not figure out yourself
var productExceptSelf = function(nums) {
  var res = [];
  res[0] = 1;
  for(var i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  var right = 1;
  for(var j = nums.length - 1; j >= 0; j--) {
    res[j] = right * res[j];
    right *= nums[j];
  }
  return res;
};