/**
 * Created by lizhelin on 18/8/4.
 */
var res;
var ambiguousCoordinates = function(S) {
  res =[];
  var index = 0;
  while(S[index] < '0' || S[index] > '9') index++;
  var left = index;
  while(S[index] >= '0' && S[index] <= '9') index++;
  var right = index;
  var num = S.substring(left, right);
  for(var i = 1; i < num.length; i++) {
    var s1 = num.substring(0, i)
    var s2 = num.substring(i, num.length);
    var temp1 = helper(s1);
    var temp2 = helper(s2);
    if(temp1.length > 0 && temp2.length > 0) combine(temp1, temp2);
  }
  return res;
};

var combine = function(str1,str2){
  for(var j = 0; j < str1.length ; j++) {
    for(var k = 0; k < str2.length; k++) {
      var s = '(' + str1[j] + ', ' + str2[k] + ')';
      res.push(s);
    }
  }
};

var helper = function(s){
  var n = s.length;
  var arr = [];
  if(n === 0 || n > 1 && s[0] === '0' && s[s.length - 1] === '0') return arr;
  if(n > 1 && s[0] === '0') {
    arr.push('0.' + s.substring(1));
    return arr;
  }
  arr.push(s);
  if (n == 1 || s.charAt(n - 1) == '0') return arr;
  for (var i = 1; i < n; ++i) arr.push(s.substring(0, i) + '.' + s.substring(i));
  return arr;
};