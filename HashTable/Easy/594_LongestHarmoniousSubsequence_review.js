/**
 * Created by lizhelin on 18/6/9.
 */
// Did it yourself but super slow
var findLHS = function(nums) {
  var len = nums.length;
  nums.sort(function(a,b) {return a - b;});
  if(nums[0] === nums[len - 1]) return 0;
  var count = 1;
  var res = 0;
  for(var i = 0; i < len - count; i++) {
    var index = i;
    var pickedValue = nums[i];
    while(index < len - 1 && nums[index] === nums[index + 1]){
      index++;
      count++;
    }
    if(index < len - 1 && nums[index + 1] === pickedValue + 1){
      count++;
      index++;
      while(index < len - 1 && nums[index] === nums[index + 1]){
        index++;
        count++;
      }
    }
    else {
      count = 0;
    }
    res = Math.max(res, count);
    count = 1;
  }
  return res;
};

// answer:
//var findLHS = function(nums) {
//  var len = nums.length;
//  var res = 0;
//  var map = {};
//  for(var i = 0; i < len; i++) {
//    if(map[nums[i]] !== undefined) {
//      map[nums[i]]++;
//    }
//    else map[nums[i]] = 1;
//  }
//  var keys = Object.keys(map);
//  for(var j = 0 ; j < keys.length; j++) {
//    var key = parseInt(keys[j]);
//    if(map[key + 1] !== undefined) {
//      res = Math.max(res, map[key] + map[key + 1]);
//    }
//  }
//  return res;
//};