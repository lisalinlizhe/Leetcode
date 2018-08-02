/**
 * Created by lizhelin on 18/8/1.
 */
var shiftingLetters = function(S, shifts) {
  var map ='abcdefghijklmnopqrstuvwxyz';
  S = S.split('');
  for(var i = shifts.length - 2; i >= 0 ; i--) {
    shifts[i] =  (shifts[i] + shifts[i + 1]) % 26;
  }
  for(var j = 0; j < shifts.length; j++) {
    var charIdx = (S[j].charCodeAt(0) + shifts[j] - 97 ) % 26;
    S[j] = map[charIdx];
  }
  return S.join('');
};