/**
 * Created by lizhelin on 18/7/17.
 */
var minSubArrayLen = function(s, nums) {
  var index = 0;
  var res = 0, sum = 0, i = 0;
  while(i < nums.length && sum < s) {
    sum += nums[i];
    i++;
  }
  if(sum < s) {
    return res;
  }else res = i;
  for(i; i <= nums.length;) {
    if(sum - nums[index] >= s) {
      sum -= nums[index];
      index++;
      res = Math.min(res, i - index);
    }
    else {
      sum = sum + nums[i] - nums[index];
      i++;
      index++;
    }
  }
  return res;
};