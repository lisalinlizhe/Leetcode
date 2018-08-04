/**
 * Created by lizhelin on 18/8/3.
 */
var calculate = function(s) {
  var num = 0;
  var arr = [];
  var sign = '+';
  for(var i = 0; i < s.length; i++) {
    if(s[i] >= '0' && s[i] <= '9') {
      num = num * 10 + parseInt(s[i] - '0');
    }
    if((s[i] < '0' || s[i] > '9') && s[i]!== ' ' || i === s.length - 1){
      if(sign === '+') {
        arr.push(num);
      }
      else if(sign === '-') {
        arr.push(-num);
      }
      else if(sign === '*') {
        arr.push(arr.pop() * num);
      }
      else if(sign === '/') {
        arr.push(parseInt(arr.pop()/num));
      }
      sign = s.charAt(i);
      num = 0;
    }
  }
  var res = 0;
  for(var j = 0; j < arr.length; j++) {
    res += arr[j];
  }
  return res;
};