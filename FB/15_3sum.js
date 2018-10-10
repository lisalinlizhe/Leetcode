/**
 * Created by lizhelin on 18/10/9.
 */
var threeSum = function(nums) {
  var res = [];
  nums = nums.sort(function(a,b){return a-b;});
  for(var i = 0; i < nums.length; i++){
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    var temp = 0 - nums[i];
    var left = i + 1;
    var right = nums.length - 1;
    while(left < right){
      if(nums[left] + nums[right] > temp) right--;
      else if(nums[left] + nums[right] < temp) left++;
      else {
        var arr = [];
        arr.push(nums[i]);
        arr.push(nums[left]);
        arr.push(nums[right]);
        res.push(arr);
        while(left < right && nums[left] === nums[left + 1]) left++;
        while(left < right && nums[right] === nums[right- 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
};