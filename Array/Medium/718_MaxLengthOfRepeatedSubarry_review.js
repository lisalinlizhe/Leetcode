/**
 * Created by lizhelin on 18/7/8.
 */
//DP!
var findLength = function(A, B) {
  var dp = [];
  var max = 0;

  for(var i = 0; i <= A.length ; i++) {
    var arr = new Array(B.length + 1).fill(0);
    dp.push(arr);
  }

  for(var j = 0 ; j <= A.length; j++) {
    for(var k = 0; k <= B.length; k++) {
      if(j === 0 || k === 0) dp[j][k] = 0;
      else {
        if(A[j - 1] === B[k - 1]) {
          dp[j][k] = dp[j - 1][k - 1] + 1;
          max = Math.max(max, dp[j][k]);
        }
      }
    }
  }
  return max;
};

//or for loop! - this seems much faster
var findLength = function(A, B) {
  var longest = 0, count;
  for (var j0 = 0; j0 < B.length; j0++) {
    var i = 0, j = j0, count = 0;
    while (i < A.length && j < B.length) {
      count = A[i] === B[j] ? count + 1 : 0;
      longest = count > longest ? count : longest;
      i++;
      j++;
    }
  }
  for (var i0 = 0; i0 < A.length; i0++) {
    var i = i0, j = 0, count = 0;
    while (i < A.length && j < B.length) {
      count = A[i] === B[j] ? count + 1 : 0;
      longest = count > longest ? count : longest;
      i++;
      j++;
    }
  }
  return longest;
};