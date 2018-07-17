/**
 * Created by lizhelin on 18/7/16.
 */
var summaryRanges = function(nums) {
  var res = [];
  var str = "";
  var index = 0 , i;
  var continuous = false;
  for(i = 0 ; i < nums.length - 1; i++) {
    str += nums[i];
    while( i <  nums.length - 1 && nums[i + 1] === nums[i] + 1) {
      i++;
      continuous = true;
    }
    if(continuous) {
      str = str + "->" + nums[i];
      continuous = false;
    }

    res[index++] = str;
    str = "";
  }
  if(i === nums.length - 1) {
    str += nums[i];
    res[index] = str;
  }

  return res;
};