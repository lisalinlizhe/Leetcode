/**
 * Created by lizhelin on 18/7/14.
 */
    //不做加法做减法，target = 0 的时候 push结果
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort(function(a,b) {return a-b;});
  var res = [];
  helper(candidates, target, 0, [], res);
  return res;
};

var helper = function(candidates, target, start, arr, res){
  if(target === 0) {
    res.push(arr.slice());
  }
  for(var i = start; i < candidates.length; i++) {
    if(candidates[i] > target) break
    if(temp === candidates[i]) continue;
    arr.push(candidates[i]);
    helper(candidates, target - candidates[i], i + 1, arr, res);
    var temp = arr.pop();
  }
};