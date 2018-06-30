/**
 * Created by lizhelin on 18/6/30.
 */
var constructArray = function(n, k) {
  var res = new Array(n);
  var i = 0;
  var left = 1;
  var right = n;
  while(i < k) {
    res[i++] = left++;
    if(i < k) res[i++]= right--;
  }
  if(k %2 === 0){
    while(i<res.length) res[i++] = right--;
  }else {
    while(i<res.length) res[i++] = left++;
  }
  return res;
};