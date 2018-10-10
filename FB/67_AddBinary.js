/**
 * Created by lizhelin on 18/10/9.
 */
var addBinary = function(a, b) {
  var res = "";
  var l1 = a.length - 1;
  var l2 = b.length - 1;
  var carry = 0;
  while(l1 >= 0 || l2 >= 0){
    var n1 = l1 >= 0 ? parseInt(a[l1]) : 0;
    var n2 = l2 >= 0 ? parseInt(b[l2]) : 0;
    var sum = (n1 + n2 + carry) < 2 ? (n1 + n2 + carry) : (n1 + n2 + carry) % 2 ;
    carry = (n1 + n2 + carry) < 2 ? 0 : 1;
    res = sum + res;
    l1--;
    l2--;
  }
  if(carry === 1) res = 1 + res;
  return res;
};