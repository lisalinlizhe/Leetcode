/**
 * Created by lizhelin on 18/8/1.
 */
    //如何确定到哪个digits[]了
var letterCombinations = function(digits) {
  var res = [];
  if(digits.length === 0) return res;
  var map = ['','','abc','def','ghi','jkl', 'mno','pqrs','tuv','wxyz'];

  helper(res, digits, map, "");
  return res;
};

var helper = function(res, digits, map, str){
  if(str.length === digits.length) {
    res.push(str.slice());
    return;
  }

  var index = parseInt(digits[str.length]);
  for(var j = 0; j < map[index].length; j++){
    helper(res,digits, map, str + map[index][j]);
  }
};