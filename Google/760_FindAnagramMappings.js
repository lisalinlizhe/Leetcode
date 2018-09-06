/**
 * Created by lizhelin on 18/9/5.
 */
var anagramMappings = function(A, B) {
  var res = [];
  var map = [];
  for(var i = 0; i < B.length; i++) {
    map[B[i]] = i;
  }

  for(var j = 0; j < A.length; j++){
    res.push(map[A[j]]);
  }
  return res;
};