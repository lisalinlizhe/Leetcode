/**
 * Created by lizhelin on 18/5/9.
 */
var selfDividingNumbers = function(left, right) {
  var arr = [];
  while(left <= right){
    if(isSelfDividingNumber(left)){
      arr.push(left);
    };
    left++;
  }
  return arr;
};
var isSelfDividingNumber = function(num){
  var copy = num;
  while(copy >= 1 ){
    var divider = parseInt(copy % 10, 10);
    if(num % divider === 0) {
      copy = copy / 10;
      continue;
    }
    else return false;
  }
  return true;
};