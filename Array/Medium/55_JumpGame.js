/**
 * Created by lizhelin on 18/7/22.
 */
var canJump = function(nums) {
  var len = nums.length;
  if(len === 1 && nums[0] >= 0) return true;
  var index = 0;
  for(var i = 0; i < len; i++) {
    index = Math.max(i + nums[i],index);
    if(index >= len - 1) return true;
    if(index <= i) return false;
  }
  return false
};