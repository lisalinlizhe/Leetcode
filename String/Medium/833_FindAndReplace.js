/**
 * Created by lizhelin on 18/8/9.
 */
var findReplaceString = function(S, indexes, sources, targets) {
  var res = "";
  var map = {};
  for(var i = 0; i < indexes.length; i++) {
    if(S.substring(indexes[i], indexes[i] + sources[i].length) === sources[i]) {
      map[indexes[i]] = i;
    }
  }
  for(var j = 0; j < S.length;) {
    if(map[j] >= 0) {
      res += targets[map[j]]
      j += sources[map[j]].length;
    }
    else {
      res += S[j];
      j++;
    }
  }
  return res;
};