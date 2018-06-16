/**
 * Created by lizhelin on 18/6/16.
 */
//Did not figure it out yourself
var letterCasePermutation = function(S) {
  var res = [];
  compute(res, S, 0, "");
  return res;
};
var compute = function(res, S, index, str) {
  if(index === S.length) {
    res.push(str);
    return;
  }
  while(index < S.length && !isNaN(S[index])) {
    str+= S[index];
    index++;
  }
  if(index < S.length){
    compute(res, S, index + 1, str+S[index].toLowerCase());
    compute(res, S, index + 1, str+S[index].toUpperCase());
  }else compute(res, S, index, str);
};