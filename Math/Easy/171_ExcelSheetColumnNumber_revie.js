/**
 * Created by lizhelin on 18/6/11.
 */
// 答案看不太懂？？？以下是答案
var titleToNumber = function(s) {
  var num = 0;
  for (var i = 0; i < s.length; i++) {
    num = num * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }
  return num;
};