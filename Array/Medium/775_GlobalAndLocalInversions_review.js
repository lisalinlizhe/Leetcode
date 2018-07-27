/**
 * Created by lizhelin on 18/7/26.
 */
//自己没想出来
var isIdealPermutation = function(A) {
  for(var i = 0; i < A.length ; i++){
    if(Math.abs(A[i] - i) >  + 1) return false;
  }
  return true;
};