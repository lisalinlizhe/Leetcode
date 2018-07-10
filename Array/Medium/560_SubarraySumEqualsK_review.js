/**
 * Created by lizhelin on 18/7/9.
 */
//Did is yourself but super super slow
var subarraySum = function(nums, k) {
  var map = new Map();
  map.set(0, 1);

  var sum = 0;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k) || 1;
    }
    map.set(sum, map.get(sum) + 1 || 1);
  }
  return count;
};