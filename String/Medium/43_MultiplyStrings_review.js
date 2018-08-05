/**
 * Created by lizhelin on 18/8/4.
 */
//精髓在于如何加和所有的乘积->整一个数组
var multiply = function(num1, num2) {
  if(parseInt(num1) === 0 || parseInt(num2) === 0) return '0';
  var l1 = num1.length;
  var l2 = num2.length;
  var res = new Array(l1 + l2).fill(0);
  for(var i = l1 - 1; i >= 0; i--){
    var n1 = parseInt(num1[i]);
    for(var j = l2 - 1 ; j >= 0; j--) {
      var n2 = parseInt(num2[j]);
      var n = (n1 * n2) % 10;
      var carry = parseInt((n1 * n2)/10);
      res[i + j + 1] += n;
      if(res[i + j + 1] >= 10){
        carry++;
        res[i + j + 1]  = res[i + j + 1] % 10;
      }
      res[i + j] += carry;
      if(res[i + j] >= 10){
        res[i + j] = res[i + j] % 10;
        res[i + j - 1] += 1;
      }
    }
  }
  var value = '';
  var k = 0;
  while(k < res.length && res[k] === 0) k++;
  for(k; k < l1 + l2; k++) {
    value += res[k];
  }
  return value;
};