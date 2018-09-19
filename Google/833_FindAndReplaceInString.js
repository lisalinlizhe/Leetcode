/**
 * Created by lizhelin on 18/9/18.
 */
var findReplaceString = function(S, indexes, sources, targets) {
  var map = {};
  var res = "";
  for(var i = 0; i < sources.length; i++){
    var idx = indexes[i];
    var source = sources[i];
    if(S.substring(idx, idx + source.length) === source) map[idx] = i;
  }
  for(var j = 0; j < S.length;){
    if(map[j] !== undefined){
      res += targets[map[j]];
      j += sources[map[j]].length;
    }
    else{
      res += S[j];
      j++;
    }
  }
  return res;
};