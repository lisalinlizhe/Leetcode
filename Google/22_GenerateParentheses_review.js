/**
 * Created by lizhelin on 18/9/8.
 */
var generateParenthesis = function(n) {
  var res = [];
  helper(res, "", 0, 0, n);
  return res;
};

var helper = function(res, str, open, close, max){
  if(str.length === max * 2) {
    res.push(str);
    return;
  }
  if(open < max){
    helper(res, str + "(", open + 1, close, max);
  }
  if(close < open){
    helper(res, str + ")" , open, close + 1, max);
  }
};