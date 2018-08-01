/**
 * Created by lizhelin on 18/7/31.
 */
//这题没啥意思？
var optimalDivision = function(nums) {
  const n = nums.length;
  if (n < 1) return '';
  if (n === 1) return '' + nums[0];
  if (n === 2) return nums[0] + '/' + nums[1];
  var result = nums[0] + '/(' + nums[1];
  for (var i = 2; i < n; i++) {
    result += '/' + nums[i]
  }
  return result + ')'
};