/**
 * Created by lizhelin on 18/9/8.
 */
var majorityElement = function(nums) {
  var map = {};
  var res = 0;
  for(var i = 0; i < nums.length; i++) {
    if(map[nums[i]] !== undefined) {
      map[nums[i]]++;
      if(map[nums[i]] > nums.length / 2) return nums[i];
    }
    else {
      map[nums[i]] = 1;
      res = nums[i];
    }
  }
  return res;
};