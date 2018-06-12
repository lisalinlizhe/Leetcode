/**
 * Created by lizhelin on 18/6/12.
 */
// Could not figure out myself. 注意解题思路 想法比较重要
var minMoves = function(nums) {
  var min = nums[0];
  var res = 0;
  for(var i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }
  for(var j = 0; j < nums.length; j++) {
    res += nums[j] - min;
  }
  return res;
};