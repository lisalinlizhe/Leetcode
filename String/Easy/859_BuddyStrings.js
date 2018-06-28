/**
 * Created by lizhelin on 18/6/28.
 */
var buddyStrings = function(A, B) {
  if(A.length !== B.length) return false;
  var index = 0;
  var needToSwap = [];
  while(index < A.length) {
    if(A[index] === B[index]) index++;
    else {
      needToSwap.push(index);
      index++;
    }
  }
  if(needToSwap.length === 1) return false;
  if(needToSwap.length == 2){
    console.log("hoho");
    A = A.split('');
    var index1 = needToSwap[0];
    var index2 = needToSwap[1];
    var temp = A[index1];
    A[index1] = A[index2];
    A[index2] = temp;
    if(A.join('') === B) return true;
    return false;
  }
  if(needToSwap.length === 0) {
    var check = 0;
    var map = {};
    while(check < A.length){
      if(map[A[check]] !== undefined) return true;
      else map[A[check]] = 1;
      check++;
    }
    return false;
  }
  return false;
};