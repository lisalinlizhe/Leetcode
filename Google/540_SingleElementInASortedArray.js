/**
 * Created by lizhelin on 18/9/7.
 */
var singleNonDuplicate = function(nums) {
  var left = 0;
  var right = nums.length;
  var mid;
  while(left < right) {
    mid = left + parseInt((right - left) / 2);
    if(nums[mid] === nums[mid - 1]) {
      if((mid - 1) % 2 !== 0) right = mid - 1;
      else left = mid + 1;
    }
    else if(nums[mid] === nums[mid + 1]){
      if(mid % 2 !== 0) right = mid - 1;
      else left = mid + 1;
    }
    else return nums[mid];
  }
  return nums[right];
};
