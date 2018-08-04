/**
 * Created by lizhelin on 18/8/4.
 */
var splitIntoFibonacci = function(s) {
  var res = [];
  helper(res, 0, s);
  return res;
};

var helper = function(res, idx, s){
  if(idx === s.length && res.length >= 3) {
    return true;
  }
  for(var i = idx; i < s.length ; i++) {
    if(s[idx] === '0' && i > idx) break;
    var num = parseInt(s.substring(idx, i + 1));
    console.log(num);
    if(num > 2147483647) break;
    var size = res.length;

    if(size >= 2 && num > res[size - 1] + res[size - 2]) break;
    if(size <= 1 || (num === res[size - 1] + res[size - 2])) {
      res.push(num);
      if(helper(res, i + 1 ,s)){
        return true;
      }
      res.pop();
    }
  }
  return false;
};