/**
 * Created by lizhelin on 18/8/27.
 */
//怎样给value排序 -> 先用array排序再放map. map永远都是按照key的大小排序的
    //convert number to string -> String.fromCharCode(INTEGER).
var frequencySort = function(s) {
  var map = {};
  var arr = new Array(256).fill(0);
  for(var i = 0; i < s.length; i++) {
    var index = s[i].charCodeAt(0);
    arr[index]++;
  }
  for(var j = 0; j < 256; j++) {
    if(arr[j] === 0) continue;
    if(map[arr[j]] !== undefined) {
      map[arr[j]].push(String.fromCharCode(j));
    }
    else{
      var temp = [];
      temp.push(String.fromCharCode(j));
      map[arr[j]] = temp;
    }
  }
  var keys = Object.keys(map);
  var res = "";
  for(var k = keys.length - 1; k >= 0; k--){
    for(var m = 0; m < map[keys[k]].length; m++) {
      var count = keys[k];
      while(count > 0) {
        res += map[keys[k]][m];
        count--;
      }
    }
  }
  return res;
};