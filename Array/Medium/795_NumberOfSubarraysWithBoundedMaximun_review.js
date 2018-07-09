/**
 * Created by lizhelin on 18/7/8.
 */
    // 自己做的超时了
var numSubarrayBoundedMax = function(A, L, R){
  var res = 0;
  var left = -1, right = -1;
  for(var i = 0; i < A.length; i++) {
    if(A[i] > R) left = i;
    if(A[i] >= L) right = i;
    res += right - left;
  }
  return res;
};