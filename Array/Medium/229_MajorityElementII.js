/**
 * Created by lizhelin on 18/7/22.
 */
var majorityElement = function(nums) {
  var map = {};
  var res = [];
  var count = parseInt(nums.length/3);
  for(var i = 0; i < nums.length; i++) {
    if(map[nums[i]] !== undefined) map[nums[i]]++;
    else map[nums[i]] = 1;
    if(map[nums[i]] > count && res.indexOf(nums[i]) === -1) res.push(parseInt(nums[i]));
  }
  return res;
};