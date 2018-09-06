/**
 * Created by lizhelin on 18/9/6.
 */
//自己想出来的太慢
// var wiggleSort = function(nums) {
//     nums = nums.sort(function(a, b) {return a - b;});
//     for(var i = 1; i < nums.length - 1; i++) {
//         var temp = nums[i];
//         nums[i] = nums[i + 1];
//         nums[i + 1] = temp;
//         i++;
//     }
// };

var wiggleSort = function(nums) {
  for(var i = 0; i < nums.length; i++) {
    if(i % 2===1){
      if(nums[i-1] > nums[i]) swap(nums, i);
    }
    else if(i != 0 && nums[i-1] < nums[i]) swap(nums, i);
  }
};

var swap = function(nums, i) {
  var tmp = nums[i];
  nums[i] = nums[i - 1];
  nums[i - 1] = tmp;
}
