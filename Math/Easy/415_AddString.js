/**
 * Created by lizhelin on 18/6/12.
 */
var addStrings = function(num1, num2) {
  var len1 = num1.length;
  var len2 = num2.length;
  var carry = 0;
  var res = "";
  var tempSum = 0;
  while(len1 > 0 || len2 > 0 || carry !== 0) {
    var n1 = num1[len1 - 1] ? num1[len1 - 1].charCodeAt(0) - '0'.charCodeAt(0) : 0;
    var n2 = num2[len2 - 1] ? num2[len2 - 1].charCodeAt(0) - '0'.charCodeAt(0) : 0;
    tempSum = (carry + n1 + n2 >= 10) ? (carry + n1 + n2) % 10 : carry + n1 + n2 ;
    carry = (carry + n1 + n2 >= 10) ? 1 : 0;
    res = tempSum.toString() + res;
    len1--;
    len2--;
  }
  return res;
};