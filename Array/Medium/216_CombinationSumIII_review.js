/**
 * Created by lizhelin on 18/7/2.
 */
//Could not figure out myself
var combinationSum3 = function(k, n) {
  var res = [];
  var arr = [];
  var num = [1,2,3,4,5,6,7,8,9];
  helper(res, arr, k, n, 0, num);
  return res;
};

var helper = function(res, arr, k, n, start, num){
  if(k === 0 && n===0) {
    res.push(arr.slice());
  }
  else {
    for(var i = start; i < num.length && k > 0 && n > 0; i++) {
      arr.push(num[i]);
      helper(res,arr, k-1, n-num[i], i + 1, num);
      arr.pop();
    }
  }
};