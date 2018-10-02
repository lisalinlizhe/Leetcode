/**
 * Created by lizhelin on 18/9/12.
 */
var repeatedStringMatch = function(A, B) {
  var count = 0;
  var str = "";
  while(str.length < B.length) {
    str += A;
    count++;
  }
  if(str.indexOf(B) !== -1) return count;
  str += A;
  if(str.indexOf(B) !== -1) return count + 1;
  return -1;
};