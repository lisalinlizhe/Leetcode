/**
 * Created by lizhelin on 18/7/23.
 */
// 3 pointer, where to point from, and how to avoid dupe.
var threeSum = function(nums) {
  nums = nums.sort(function(a, b) {return a- b;});
  var left, right;
  var res = [];
  for(var i = 0; i < nums.length - 2; i++) {
    if(i === 0 || (i > 0 && nums[i] !== nums[i-1])){
      left = i + 1;
      right = nums.length - 1;
      var sum = -1 * nums[i];
      while(left < right) {
        if(nums[left] + nums[right] > sum) right--;
        else if(nums[left] + nums[right] < sum) left++;
        else {
          var arr = [];
          arr.push(nums[i], nums[left], nums[right]);
          res.push(arr);
          while(left < right && nums[left] === nums[left + 1]) left++;
          while(left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }
      }
    }
  }
  return res;
};