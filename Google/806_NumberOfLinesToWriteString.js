/**
 * Created by lizhelin on 18/9/5.
 */
var numberOfLines = function(widths, S) {
  var res = [];
  var col = 1;
  var totalUnits = 0;
  for(var i = 0; i < S.length; i++){
    var idx = S[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if(totalUnits + widths[idx] <= 100) {
      totalUnits += widths[idx];
    }
    else {
      col++;
      totalUnits = widths[idx];
    }
  }
  res.push(col);
  res.push(totalUnits);
  return res;
};