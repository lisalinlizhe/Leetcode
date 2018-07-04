/**
 * Created by lizhelin on 18/7/4.
 */
var findDuplicate = function(nums) {
  var arr = new Array(nums.length).fill(0);
  var res = 0;
  for(var i = 0 ; i < nums.length; i++) {
    var index = nums[i] - 1;
    if(arr[index] < 0) {
      res = index + 1;
      break;
    }
    else {
      arr[index] = nums[i] * -1;
    }
  }
  return res;
};