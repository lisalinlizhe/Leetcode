/**
 * Created by lizhelin on 18/7/9.
 */
//How to do it with only 1 for loop
var sortColors = function(nums) {
  var low = 0, high = nums.length - 1, pivot = 0;
  while(pivot <= high) {
    if (nums[pivot] === 0) {
      swap(nums, pivot, low);
      low++;
      pivot++;
    } else if (nums[pivot] === 2) {
      swap(nums, pivot, high);
      high--;
    } else {
      pivot++;
    }
  }
};

var swap = function(arr, low, high) {
  var temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;
};