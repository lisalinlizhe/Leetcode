/**
 * Created by lizhelin on 18/6/26.
 */
var shortestToChar = function(S, C) {
  var cIndex = [];
  var res = [];
  for(var i = 0; i < S.length; i++) {
    if(S[i] === C) cIndex.push(i);
  }
  var k = 0;
  for(var j = 0; j < S.length; j++) {
    if(j <= cIndex[k]) res.push(cIndex[k] - j);
    else if(j > cIndex[k] && k < cIndex.length - 1) {
      if(j - cIndex[k] > cIndex[k + 1] - j) {
        k++;
        res.push(cIndex[k] - j);
      }else res.push(j - cIndex[k]);
    }else res.push(Math.abs(cIndex[k] - j));
  }
  return res;
};