/**
 * Created by lizhelin on 18/7/24.
 */
var maxProduct = function(nums) {
  var max = nums[0];
  var min = nums[0];
  var productMax = nums[0];

  for (var i = 1; i < nums.length; i++) {
    var num = nums[i];

    var tempMax = max;
    max = Math.max(Math.max(max * num, min * num), num);
    min = Math.min(Math.min(tempMax * num, min * num), num);

    if (productMax < max) {
      productMax = max;
    }
  }

  return productMax;
};