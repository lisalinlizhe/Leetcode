/**
 * Created by lizhelin on 18/7/6.
 */
var combinationSum = function(candidates, target) {
  var res = [];
  helper(res, [], target, 0 , candidates);
  return res;
};

var helper = function(res, arr, target, start, candidates){
  for(var i = start; i < candidates.length ; i++) {
    var n = candidates[i];
    arr.push(n);
    if(n < target) {
      helper(res, arr.slice(), target - n, i, candidates);
    }
    else if(n === target){
      res.push(arr.slice());
    }
    arr.pop();
  }
};