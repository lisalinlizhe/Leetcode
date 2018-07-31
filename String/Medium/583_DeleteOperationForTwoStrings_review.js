/**
 * Created by lizhelin on 18/7/30.
 */
var minDistance = function(word1, word2) {
  var dp = [];
  for(var i = 0; i <= word1.length; i++) {
    var arr = new Array(word2.length + 1);
    dp.push(arr);
  }
  for(var i = 0; i <= word1.length; i++) {
    for(var j = 0; j <= word2.length; j++) {
      if(i === 0 || j === 0) {
        dp[i][j] = 0;
      }else {
        if(word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  var num = dp[word1.length][word2.length];
  return word1.length - num + word2.length - num;
};