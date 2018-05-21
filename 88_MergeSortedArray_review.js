/**
 * Created by llin on 5/20/18.
 */
var merge = function(nums1, m, nums2, n) {
  var index1 = m - 1;
  var index2 = n - 1;
  var index = m + n - 1;
  while(index1 >= 0 && index2 >= 0) {
      if(nums1[index1] > nums2[index2]) {
          nums1[index--] = nums1[index1--];
      }
      else {
          nums1[index--] = nums2[index2--];
      }
  }
  if(index1 == -1 && index2 !== -1){
      while(index >= 0) {
          nums1[index--] = nums2[index2--];
      }
  }
};