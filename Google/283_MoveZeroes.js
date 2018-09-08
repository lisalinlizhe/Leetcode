/**
 * Created by lizhelin on 18/9/8.
 */
var moveZeroes = function(nums) {
  var index = 0;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for(index; index < nums.length; index++) {
    nums[index] = 0;
  }
};