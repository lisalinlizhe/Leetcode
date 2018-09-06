/**
 * Created by lizhelin on 18/9/5.
 */
//Notice: left = mid - not mid + 1.
var peakIndexInMountainArray = function(A) {
  var left = 0;
  var right = A.length - 1;
  var mid = 0;
  while(left < right) {
    mid = parseInt(left + (right - left)/2);
    var num = A[mid];
    if(mid > 0 && mid < A.length - 1) {
      if(A[mid - 1] < A[mid] && A[mid] < A[mid + 1]) left = mid;
      else if(A[mid - 1] > A[mid] && A[mid] > A[mid + 1]) right = mid;
      else if(A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) return mid;
    }
  }
  return 0;
};