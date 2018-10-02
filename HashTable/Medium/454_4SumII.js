/**
 * Created by lizhelin on 18/8/29.
 */
var fourSumCount = function(A, B, C, D) {
  var map = {};
  var count = 0;
  for(var i = 0; i < A.length; i++) {
    for(var j = 0; j < C.length; j++) {
      var sum = A[i] + C[j];
      if(map[sum] !== undefined) map[sum]++;
      else map[sum] = 1;
    }
  }

  for(var m = 0; m < B.length; m++) {
    for(var n = 0; n < D.length; n++) {
      var sum = -(B[m] + D[n]);
      if(map[sum] !== undefined) count+= map[sum];
    }
  }

  return count;
};