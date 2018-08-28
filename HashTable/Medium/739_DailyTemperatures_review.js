/**
 * Created by lizhelin on 18/8/27.
 */
var dailyTemperatures = function(temperatures) {
  var arr = [];
  var res = new Array(temperatures.length).fill(0);

  for(var i = 0; i < temperatures.length; i++){
    while(arr.length > 0 && temperatures[i] > temperatures[arr[arr.length - 1]]){
      var idx = arr.pop();
      res[idx] = i - idx;
    }
    arr.push(i);
  }
  return res;
};