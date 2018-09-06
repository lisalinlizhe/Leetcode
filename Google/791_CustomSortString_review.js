/**
 * Created by lizhelin on 18/9/6.
 */
var customSortString = function(S, T) {
  var res = "";
  for(var i = 0; i < S.length; i++) {
    var c = S[i];
    for(var j = 0 ; j < T.length; j++) {
      if(T[j] === S[i]) {
        res += S[i];
        T = T.replace(T[j], '');
        j--;
      }
    }
  }
  return res + T;
};