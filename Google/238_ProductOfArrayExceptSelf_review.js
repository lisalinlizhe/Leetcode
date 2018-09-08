/**
 * Created by lizhelin on 18/9/8.
 */
var productExceptSelf = function(nums) {
  var res = [];
  res.push(1);
  for(var i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  var right = 1;
  for(var i = nums.length - 1; i>= 0; i--) {
    res[i] = res[i] * right;
    right *= nums[i];
  }
  return res;
};
