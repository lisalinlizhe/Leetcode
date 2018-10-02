/**
 * Created by lizhelin on 18/8/29.
 */
var topKFrequent = function(words, k) {
  var arr = new Array(words.length);
  for(var i = 0; i < words.length; i++) {
    arr[i] = [];
  }
  var map = {};
  for(var i = 0; i < words.length; i++) {
    var str = words[i];
    if(map[str] !== undefined) map[str]++;
    else map[str] = 1;
  }

  var keys = Object.keys(map);
  for(var j = 0; j < keys.length; j++) {
    var key = keys[j];
    var idx = map[key];
    arr[idx].push(key);
  }

  var count = 0;
  var res = [];
  for(var m = arr.length - 1; m >= 0 && count < k; m--) {
    if(arr[m].length !== 0) {
      arr[m].sort();
      for(var n = 0; n < arr[m].length && count < k; n++) {
        res.push(arr[m][n]);
        count++;
      }
    }
  }
  return res;
};