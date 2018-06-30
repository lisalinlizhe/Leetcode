/**
 * Created by lizhelin on 18/6/29.
 */
//how to do with no extra space!
var findDuplicates = function(nums){
  var res = [];
  for(var i = 0; i < nums.length; i++) {
    var index = Math.abs(nums[i]) - 1;
    if(nums[index] < 0) res.push(Math.abs(nums[i]));
    else nums[index] *= -1;
  }
};