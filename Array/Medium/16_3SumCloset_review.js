/**
 * Created by lizhelin on 18/7/21.
 */
var threeSumClosest = function(nums, target) {
  var res = nums[0] + nums[1] + nums[nums.length - 1];
  nums = nums.sort(function(a, b) {return a - b;});
  for(var i = 0; i < nums.length - 2; i++){
    var start = i + 1, end = nums.length - 1;
    while(start < end) {
      var sum = nums[i] + nums[start] + nums[end];
      if(sum === target) return target;
      if(sum > target) {
        end--;
      }
      else {
        start++;
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
    }
  }
  return res;
};