/**
 * Created by lizhelin on 18/7/30.
 */
var groupAnagrams = function(strs) {
  var res = [];
  var map = {};
  var index = 0;
  for(var i = 0; i < strs.length; i++) {
    var str = strs[i].split('').sort().join('');
    if(map[str] !== undefined) {
      res[map[str]].push(strs[i]);
    }
    else {
      map[str] = index;
      var arr = [strs[i]];
      res.push(arr);
      index++;
    }
  }
  return res;
};