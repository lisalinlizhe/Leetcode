/**
 * Created by lizhelin on 18/7/1.
 */
// Could not figure out yourself
var maxChunksToSorted = function(arr){
  var res = 0;
  var max = 0;
  for(var i = 0; i < arr.length ;i++){
    max = Math.max(max, arr[i]);
    if(max === i) res++
  }
  return res;
};