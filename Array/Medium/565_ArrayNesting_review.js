/**
 * Created by lizhelin on 18/7/1.
 */
//could not figure out yourself
var arrayNesting = function(nums){
  var max = 0;
  for(var i = 0; i < nums.length; i++) {
    var size = 0;
    for(var k = i; nums[k] >= 0 ; size++){
      k = nums[i];
      nums[i] = -1;
      i = k;
    }
    max = Math.max(max, size);
  }
  return max;
};