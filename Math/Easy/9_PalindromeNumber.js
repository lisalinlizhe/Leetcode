/**
 * Created by lizhelin on 18/6/13.
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  x = x.toString();
  var left = 0;
  var right = x.length - 1;
  while(left < right){
    if(x[left] === x[right]) {
      left++;
      right--;
    }
    else return false;
  }
  return true;
};