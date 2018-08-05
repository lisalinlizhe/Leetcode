/**
 * Created by lizhelin on 18/8/5.
 */
var reverseWords = function(str) {
  var res = "";
  var i = str.length - 1;
  while(i >= 0 && str[i] === ' ') i--;
  for(i; i >= 0 ; i--) {
    var index = i;
    while(i >= 0 && str[i] !== ' ') i--;
    res += str.substring(i + 1, index + 1);
    res += ' ';
    while(i >= 0 && str[i] === ' ') i--;
    i++;
  }
  return res.trim();
};