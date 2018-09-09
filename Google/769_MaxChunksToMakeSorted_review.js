/**
 * Created by lizhelin on 18/9/9.
 */
//自己最后想出来但是太慢了
var maxChunksToSorted = function(arr){
  if(arr.length === 1) return 1;
  var max = arr[0];
  var res = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    if(i >= max) res++;

  }
  return res;
};
