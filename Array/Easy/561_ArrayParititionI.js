/**
 * Created by lizhelin on 18/5/10.
 */
var arrayPairSum = function(nums) {
  nums.sort(function(a, b){return a - b ;});
  var res = 0;
  for(var i = nums.length - 1; i > 0; i = i -2){
    res += Math.min(nums[i], nums[i-1]);
  }
  return res;
};