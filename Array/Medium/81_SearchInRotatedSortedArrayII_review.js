/**
 * Created by lizhelin on 18/7/21.
 */
var search = function(nums, target) {
  if (nums.length === 0) return false;

  function searchSub(lp, rp) {
    var mid = Math.floor((lp + rp) / 2);
    if (nums[lp] === target || nums[rp] === target) return true;
    if (lp === mid) return false;
    return searchSub(lp, mid) || searchSub(mid, rp);
  }

  return searchSub(0, nums.length - 1);
};

//var search = function(nums, target) {
//  var left = 0;
//  var right = nums.length - 1;
//  var mid;
//  while(left <= right) {
//    mid = left + parseInt((right - left)/2);
//    if(nums[mid] === target) return true;
//    if((nums[left] === nums[mid]) && (nums[right] === nums[mid])) {++left; --right;}
//    else if(nums[left] <= nums[mid]){
//      if(nums[left] <= target && nums[mid] > target) right = mid - 1;
//      else left = mid + 1;
//    }
//    else{
//      if(nums[mid] < target && nums[right] >= target) left = mid + 1;
//      else right = mid - 1;
//    }
//
//  }
//  return false;
//};