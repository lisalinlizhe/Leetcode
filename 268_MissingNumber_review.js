/**
 * Created by lizhelin on 18/5/15.
 */
var missingNumber = function(nums){
  var sum = 0;
  var l = nums.length;
  for(var i = 0; i < l; i++){
    sum += nums[i];
  }
  return ((1 + l) * l / 2 - sum);
}
