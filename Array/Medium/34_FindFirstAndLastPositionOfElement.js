/**
 * Created by lizhelin on 18/7/22.
 */
var searchRange = function(nums, target) {
  if(nums.length === 0) return [-1,-1];
  var left = 0;
  var right = nums.length - 1;
  var res = [-1, -1];
  while(left <= right){
    var mid = left + parseInt((right - left)/2);
    if(nums[mid] === target) {
      left = mid;
      right = mid;
      while(left >= 0 && nums[left] === target) left--;
      while(right <= nums.length - 1 && nums[right] === target) right++;
      res[0] = left + 1;
      res[1] = right - 1;
      return res;
    }
    else if(nums[mid] > target) {
      right = mid - 1;
    }
    else if(nums[mid] < target) {
      left = mid + 1;
    }
  }
  return res;
};