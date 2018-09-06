/**
 * Created by lizhelin on 18/9/6.
 */
var singleNumber = function(nums) {
  var res = nums[0];
  for(var i = 1 ; i < nums.length; i++){
    res ^= nums[i];
  }
  return res;
};