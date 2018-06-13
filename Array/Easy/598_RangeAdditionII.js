/**
 * Created by lizhelin on 18/6/12.
 */
var maxCount = function(m, n, ops) {
  var minM = m;
  var minN = n;
  for(var i = 0; i < ops.length; i++) {
    minM = Math.min(minM, ops[i][0]);
    minN = Math.min(minN, ops[i][1]);
  }
  return  minM * minN;
};