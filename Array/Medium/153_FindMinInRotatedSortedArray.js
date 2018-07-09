/**
 * Created by lizhelin on 18/7/8.
 */
var findMin = function(nums) {
  if(nums.length === 1) return nums[0];
  var left = 0;
  var right = nums.length - 1;
  if(nums[left] < nums[right]) return nums[left];
  while(left < right && nums[left] < nums[left + 1]) left++;
  return nums[left + 1];
};