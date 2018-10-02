/**
 * Created by lizhelin on 18/9/26.
 */
var fractionToDecimal = function(numerator, denominator) {
  var res = "";
  if(numerator *  denominator < 0){
    res += '-';
    var flag = true;
    if(numerator < 0) numerator = -numerator;
    else if(denominator < 0) denominator = -denominator;
  }
  var position = 1;
  var map = {};
  if(numerator % denominator === 0) return res + numerator / denominator;
  var first = true;
  while(numerator !== 0){
    if(Math.abs(numerator) < Math.abs(denominator)) res += 0;
    else res += parseInt(numerator / denominator);
    if(first){
      res += '.';
      first = false;
    }
    var left = numerator % denominator;
    if(map[left] !== undefined){
      var idx = res.indexOf('.')
      var res = res.slice(0, idx + map[left]) + '(' + res.slice(idx + map[left], res.length ) + ')';
      return res;
    }
    else {
      map[left] = position;
      position++;
    }
    numerator = left * 10;
  }
  return res;
};