/**
 * Created by llin on 5/20/18.
 */
var removeDuplicates = function(nums){
  var index = 0;
  for(var i = 1 ; i < nums.length ; i++) {
      if(nums[i] !== nums[index]) {
          nums[index + 1] = nums[i];
          index++;
      }
  }
  return index + 1;
};