/**
 * Created by lizhelin on 18/8/26.
 */
//自己想的差不多 但是注意思路：compare (A[i] - A[i - 1]) and (A[i - 1] - A[i - 2])
var numberOfArithmeticSlices = function(A) {
  if (A.length < 3) return 0;

  var dp = Array(A.length).fill(0);
  var step = 1;

  for (var i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = dp[i - 1] + step;
      step++;
    } else {
      dp[i] = dp[i - 1];
      step = 1;
    }
  }

  return dp[A.length - 1];
};