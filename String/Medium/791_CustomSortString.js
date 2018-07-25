/**
 * Created by lizhelin on 18/7/25.
 */
var customSortString = function(S, T) {
  var res = "";
  for(var i = 0; i < S.length; i++) {
    var char = S[i];
    for(var j = 0; j < T.length; j++) {
      if(T[j] === char) {
        res += T[j];
        T = T.replace(char, '');
        j--;
      }
    }
  }
  return res + T;
};