/**
 * Created by lizhelin on 18/9/8.
 */
var topKFrequent = function(nums, k) {
  var map = {};
  var arr = new Array(nums.length + 1).fill(false);
  var res = [];
  for(var i = 0; i < nums.length; i++) {
    if(map[nums[i]] !== undefined) map[nums[i]]++;
    else map[nums[i]] = 1;
  }
  var keys = Object.keys(map);
  for(var j = 0; j < keys.length; j++) {
    var count = map[keys[j]];
    if(arr[count] === false){
      arr[count] = [];
    }

    arr[count].push(parseInt(keys[j]));
  }

  for(var m = arr.length - 1 ; m >= 0; m--) {
    if(arr[m] !== false){
      while(arr[m].length > 0 && res.length < k) {
        res.push(arr[m].pop());
      }
    }
  }
  return res;
};