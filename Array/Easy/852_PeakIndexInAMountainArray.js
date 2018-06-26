/**
 * Created by lizhelin on 18/6/25.
 */
var peakIndexInMountainArray = function(A) {
  var left = 0;
  var right = A.length - 1;
  var mid = left + parseInt((right - left)/2);
  while(mid >=0 || mid <= A.length - 1) {
    if(A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) return mid;
    else if(A[mid] < A[mid - 1]) mid--;
    else if(A[mid] < A[mid + 1]) mid++;
  }
  return mid;
};