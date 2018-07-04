/**
 * Created by lizhelin on 18/7/4.
 */
var subsets = function(nums) {
  var res = [];
  helper(res, nums, [], 0);
  return res;
};

var helper = function(res, nums, arr, start){
  res.push(arr.slice());
  for(var i = start; i < nums.length; i++) {
    arr.push(nums[i]);
    helper(res, nums, arr, i + 1);
    arr.pop();
  }
};