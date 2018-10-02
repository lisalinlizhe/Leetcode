/**
 * Created by lizhelin on 18/9/16.
 */
var twoSum = function(nums, target) {
  var map = {};
  var res = [];
  for(var i = 0; i < nums.length; i++) {
    if(map[nums[i]] !== undefined){
      var idx = map[nums[i]];
      res.push(idx);
      res.push(i);
    }
    else {
      map[target - nums[i]] = i;
    }
  }
  return res;
};