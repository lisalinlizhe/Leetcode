/**
 * Created by lizhelin on 18/9/20.
 */
var plusOne = function(digits) {
  var res = new Array(digits.length + 1).fill(1);
  var carry = 0;
  var tempSum = digits[digits.length - 1] + 1;
  if(tempSum < 10) {
    digits[digits.length - 1] = tempSum;
    return digits;
  }
  else{
    res[res.length - 1] = tempSum % 10;
    carry = 1;
    for(var i = digits.length - 2; i >= 0; i--){
      var temp = (digits[i] + carry)  >= 10 ?  (digits[i] + carry)  % 10 : digits[i] + carry;
      carry = (digits[i] + carry) >= 10? 1: 0;
      res[i + 1] = temp;
    }
  }
  if(carry) {
    return res;
  }

  return res.slice(1, res.length);
};