/**
 * Created by lizhelin on 18/7/7.
 */
var triangleNumber = function(nums) {
  var result = 0;
  if (nums.length < 3) return result;
  nums.sort(function(a, b) {return a-b;});

  for (var i = 2; i < nums.length; i++) {
    var left = 0, right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        result += (right - left);
        right--;
      }
      else {
        left++;
      }
    }
  }
  return result;
}