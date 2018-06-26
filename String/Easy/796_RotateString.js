/**
 * Created by lizhelin on 18/6/25.
 */
var rotateString = function(A, B) {
  if(A.length !== B.length) return false;
  var temp = B + B;
  return temp.indexOf(A) !== -1;
};