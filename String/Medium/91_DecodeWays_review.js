/**
 * Created by lizhelin on 18/8/5.
 */
var numDecodings = function(s) {
  if (s === null || s.length === 0) {
    return 0;
  }
  var len = s.length;
  var dp = new Array(len + 1).fill(0);
  dp[0] = 1;

  for (var i = 1; i <= len; i++) {
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }
    if (i >= 2) {
      var value = Number(s[i - 2]) * 10 + Number(s[i - 1]);
      if (value >= 10 && value <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  }
  return dp[len];
};