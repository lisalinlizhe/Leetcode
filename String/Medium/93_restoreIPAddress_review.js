/**
 * Created by lizhelin on 18/8/3.
 */
var restoreIpAddresses = function(s) {
  var res = [];

  for(var i = 1; i < 4 && i < s.length - 2; i++) {
    for(var j = i + 1; j < i + 4 && j < s.length - 1; j++) {
      for(var k = j+ 1; k < j + 4 && k < s.length; k++) {
        var s1 = s.substring(0, i);
        var s2 = s.substring(i, j);
        var s3 = s.substring(j, k);
        var s4 = s.substring(k, s.length);
        if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){
          res.push(s1 + '.' + s2 + '.' + s3 + '.' + s4);
        }
      }
    }
  }
  return res;
};

var isValid = function(s){
  if(s.length > 3 || parseInt(s) > 255 || s[0] === '0' && s.length > 1 || s.length === 0) return false;
  return true;

}