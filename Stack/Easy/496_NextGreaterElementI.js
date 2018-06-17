/**
 * Created by lizhelin on 18/6/17.
 */
var nextGreaterElement = function(findNums, nums) {
  var res = [];
  for(var i = 0; i < findNums.length ; i++) {
    var index = nums.indexOf(findNums[i]);
    for(var j = index + 1; j < nums.length; j++) {
      if(nums[j] > findNums[i]) {
        res.push(nums[j]);
        break;
      }
    }
    if(j === nums.length) res.push(-1);
  }
  return res;
};