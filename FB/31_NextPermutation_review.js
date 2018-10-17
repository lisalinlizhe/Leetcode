/**
 * Created by lizhelin on 18/10/16.
 */
var nextPermutation = function(nums) {
  var l = nums.length;
  var idx = l - 1;
  while(idx > 0) {
    if(nums[idx] > nums[idx - 1]) break;
    idx--;
  }

  if(idx === 0) {
    nums.reverse();
    return;
  }

  //got the element: idx. Starting from the last one, find an element that larger than nums[idx];
  var min = nums[idx - 1];
  var i = l - 1;
  while(i >= idx) {
    if(nums[i] > min) break;
    i--;
  }
  swap(nums, i, idx - 1);

  //sort the rest from idx;
  reverseTheRest(nums, idx, l - 1);

};

var swap = function(nums, idx, i){
  var temp = nums[idx];
  nums[idx] = nums[i];
  nums[i] = temp;
};

//special attention here!!!!!!!! reverse part of the array!!!!
var reverseTheRest = function(nums, left, right){
  if(left > right) return;
  for(var i = left; i <= (left + right) / 2; i++){
    swap(nums, i, left + right - i);
  };
};