/**
 * Created by lizhelin on 18/8/27.
 */
var topKFrequent = function(nums, k) {
  var map = {};
  var res = [];
  var output = [];
  for(var m = 0; m <= nums.length; m++){
    res[m] = [];
  }
  for(var i = 0; i < nums.length; i++) {
    if(map[nums[i]] !== undefined) map[nums[i]]++;
    else map[nums[i]] = 1;
  }

  var keys = Object.keys(map);
  for(var j = 0; j < keys.length; j++) {
    var index = map[keys[j]];
    res[index].push(parseInt(keys[j]));
  }

  var count = 0;

  for(var i = res.length - 1; i >= 0; i--) {
    for(var j = 0; j < res[i].length; j++) {
      if(count < k) output.push(res[i][j]);
      count++;
      if(count === k) break;
    }
  }
  return output;
};