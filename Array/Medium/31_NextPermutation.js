/**
 * Created by lizhelin on 18/8/6.
 */
var nextPermutation = function(nums) {
  var l = nums.length - 1;
  if(l <= 0) return;
  while(l >= 0) {
    if(nums[l - 1] < nums[l]) break;
    l--;
  }

  if(l <= 0) {
    nums.reverse();
    return;
  }

  var val=nums[l-1];
  var j=nums.length-1;
  while(j>=l){
    if(nums[j]>val)
      break;
    j--;
  }

  //swap

  swap(nums,l - 1,j);
  reversePart(nums, l, nums.length - 1);
};

var swap = function(nums, l, idx){
  var temp = nums[l] ;
  nums[l] = nums[idx];
  nums[idx] = temp;
}

var reversePart = function(nums, start, end){
  if(start > end)
    return;
  for(var i=start;i<=(end+start)/2;i++)
    swap(nums,i,start+end-i);
}