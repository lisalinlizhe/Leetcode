/**
 * Created by lizhelin on 18/7/11.
 */
var removeDuplicates = function(nums) {
  var index = 1;
  var count = 0;
  for(var i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[i - 1]) {
      nums[index++] = nums[i];
      count = 0;
    }
    else if(nums[i] === nums[i - 1] && count < 1){
      nums[index] = nums[i];
      index++;
      count++;
    }
  }
  return index;
};