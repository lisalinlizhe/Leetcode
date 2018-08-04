/**
 * Created by lizhelin on 18/8/3.
 */
var nextGreaterElement = function(n) {
  n = n.toString().split('');
  var i, j;
  for(i = n.length - 1; i > 0; i--) {
    if(n[i - 1] < n[i]) break;
  }
  if(i=== 0) return -1;

  var x = n[i - 1];
  var smallest = i;

  for(j = i +1; j < n.length; j++) {
    if(n[j] > x && n[j] < n[smallest]) smallest = j;
  }
  var temp = n[i-1];
  n[i-1] =  n[smallest];
  n[smallest] = temp;
  var sub = n.join('').substring(i , n.length + 1).split('');
  sub = sub.sort(function(a,b){return a-b;});

  var res = parseInt(n.join('').substring(0, i) + sub.join(''));
  return res > 2147483647? -1 : res;
};