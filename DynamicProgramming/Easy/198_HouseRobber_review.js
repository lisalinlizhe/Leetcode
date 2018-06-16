/**
 * Created by lizhelin on 18/6/16.
 */
    //Did it yourself, but need to investigate the better sulotion
var rob = function(nums) {
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0];
  if(nums.length < 3) return Math.max(nums[0], nums[1]);
  var max1 = nums[0];
  var max2 = nums[1];
  nums[2] = nums[2] + nums[0]
  var max = Math.max(nums[2],max2);
  for(var i = 3; i < nums.length; i++) {
    nums[i] = nums[i] + Math.max(nums[i-2], nums[i-3]);
    max = Math.max(max, nums[i]);
  }
  return max;
};


// Faster solution
//var rob = function(nums) {
//  if(nums.length === 0) return 0;
//  if(nums.length === 1) return nums[0];
//  var max1 = nums[0];
//  nums[1] = Math.max(nums[0],nums[1]);
//  var max = max1;
//  for(var i = 2; i < nums.length; i++) {
//    nums[i] = Math.max(nums[i-1], nums[i] + nums[i-2]);
//  }
//  return nums[nums.length - 1];
//};