/**
 * Created by lizhelin on 18/6/9.
 */
// We have so many similar 思路的题！！！！！！！掌握一下
// my code -- 忒慢
//var findErrorNums = function(nums) {
//  var map = {};
//  var len = nums.length;
//  var res = new Array(2);
//  for(var i = 0 ; i < len ; i++) {
//    if(nums.indexOf(i + 1) === -1) res[1] = i + 1;
//    if(map[nums[i]] !== undefined) {
//      res[0] = nums[i];
//    }
//    else map[nums[i]] = 1;
//  }
//  return res;
//};

// 标准解法
var findErrorNums = function(nums) {
  var len = nums.length;
  var res = [];
  for(var i = 0; i < len; i++) {
    var index = Math.abs(nums[i]) - 1;
    if(nums[index] > 0) {
      nums[index] *= -1;
    }
    else {
      res.push(Math.abs(nums[i]));
    }
  }
  for(var j = 0; j < len; j++) {
    if(nums[j] > 0) {
      res.push(j + 1);
    }
  }
  return res;
};
