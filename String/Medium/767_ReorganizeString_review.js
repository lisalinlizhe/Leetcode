/**
 * Created by lizhelin on 18/8/9.
 */
var reorganizeString = function(S) {
  var res = '', maxLen = 0;
  var arr = new Array(26).fill(0);
  for(var i = 0; i < S.length ; i++) {
    var idx = S[i].charCodeAt(0) - 'a'.charCodeAt(0);
    arr[idx]++;
    if(arr[idx] > maxLen) maxLen = arr[idx];
  }

  if (maxLen > Math.ceil(S.length/2)) {
    return ""
  }

  var max = 0;
  var maxIdx = 0;
  var pre = -1;
  var k;
  for(var j = 0; j < S.length; j++) {
    var max = 0;
    var maxIdx = 0;

    for(k = 0; k < 26; k++) {
      if(arr[k] > max && k != pre) {
        max = arr[k];
        maxIdx = k;
      }
    }
    var char = String.fromCharCode('a'.charCodeAt(0) + maxIdx);
    arr[maxIdx]--;
    res += char;
    pre = maxIdx;
  }
  return res;
};