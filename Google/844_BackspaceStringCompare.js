/**
 * Created by lizhelin on 18/9/13.
 */
var backspaceCompare = function(S, T) {
  for(var i = 0; i <= S.length; i++) {
    if(i > 0 && S[i] === '#') {
      S = S.substring(0, i - 1) + S.substring(i + 1);
      i -= 2;
    }
    else if(S[i] === '#') {
      S = S.substring(1);
      i -= 1;
    }
  }
  for(var j = 0; j <= T.length; j++){
    if(i > 0 && T[j] === '#') {
      T = T.substring(0, j - 1) + T.substring(j + 1);
      j -= 2;
    }
    else if(T[j] === '#') {
      T = T.substring(1);
      j -= 1;
    }
  }
  return S === T;
};