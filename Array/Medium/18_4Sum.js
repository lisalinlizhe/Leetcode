/**
 * Created by lizhelin on 18/7/24.
 */
var fourSum = function(nums, target) {
  nums = nums.sort(function(a,b){return a- b;});
  var left, right;
  var res = [];
  for(var i = 0; i < nums.length - 3; i++) {
    if(i === 0 || i > 0 && nums[i] != nums[i -1]){
      var threeSum = target - nums[i];
      for(var j = i + 1; j < nums.length - 2; j++) {
        if(j === i + 1 || nums[j] != nums[j -1]){
          left = j + 1;
          right = nums.length - 1;
          var twoSum = threeSum - nums[j];
          while(left < right) {
            if(nums[left] + nums[right] > twoSum) right--;
            else if(nums[left] + nums[right] < twoSum) left++;
            else {
              var arr = [];
              arr.push(nums[i], nums[j], nums[left], nums[right]);
              res.push(arr);
              while(left < right && nums[left] === nums[left + 1]) left++;
              while(left < right && nums[right] === nums[right - 1]) right--;
              left++;
              right--;
            }
          }
        }
      }
    }
  }
  return res;
};