/**
 * Created by lizhelin on 18/7/10.
 */
var subsetsWithDup = function(nums) {
  var res = []
  nums.sort(function(a,b) {return a-b;});
  helper(res, 0, nums, []);
  return res;
};

var helper = function(res, start, nums, arr){
  res.push(arr.slice());
  for(var i = start; i < nums.length; i++) {
    if(nums[i] === lastPop) continue;
    arr.push(nums[i]);
    helper(res, i + 1, nums, arr);
    var lastPop = arr.pop();

  }
};