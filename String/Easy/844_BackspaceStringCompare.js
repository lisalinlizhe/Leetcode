/**
 * Created by lizhelin on 18/6/14.
 */
var backspaceCompare = function(S, T) {
  var i = 0;
  var j = 0;
  while(i < S.length || j < T.length) {
    if(i < S.length && S[i] === '#') {
      if(S.length >= 1) {
        S = S.substring(0, i - 1) + S.substring(i + 1, S.length);
        i -= 2;
      }
      else {
        S = S.substring(i + 1, S.length);
        i--;
      }
    }
    else i++;
    if(j < T.length && T[j] === '#'){
      if(T.length >= 1) {
        T= T.substring(0, j - 1) + T.substring(j + 1, T.length);
        j -= 2;
      }
      else {
        T = T.substring(j + 1, T.length);
        j--;
      }
    }
    else j++;
  }
  return S === T;
};