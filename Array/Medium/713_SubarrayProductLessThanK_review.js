/**
 * Created by lizhelin on 18/7/16.
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if(k <= 1) return 0;
  var res = 0;
  var index = 0;
  var product = 1;
  for(var i = 0; i < nums.length; i++) {
    product *= nums[i];
    while(product >= k) {
      product /= nums[index];
      index++;
    }
    res += i - index + 1;
  }
  return res;
};
