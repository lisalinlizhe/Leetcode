/**
 * Created by lizhelin on 18/7/29.
 */
//自己没想出来.
var scoreOfParentheses = function(S) {
  var res = new Array(30).fill(0);
  var index = 0;
  for(i = 0; i < S.length; i++) {
    if(S[i] === '(') res[++index] = 0;
    else res[index - 1] += Math.max(res[index--] * 2, 1)
  }
  return res[0];
};