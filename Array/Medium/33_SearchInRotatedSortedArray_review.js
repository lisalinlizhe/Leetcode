/**
 * Created by lizhelin on 18/7/19.
 */
var search = function(nums, target) {
  var lo = 0;
  var hi = nums.length - 1;
  var mid = Math.floor((lo + hi) / 2);
  while (lo < hi) {
    if (nums[mid] === target) return mid;

    if (nums[lo] <= nums[mid]) {
      if (target >= nums[lo] && target < nums[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[hi]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    mid = Math.floor((lo + hi)/2)
  }
  return nums[lo] == target ? lo : -1;
};