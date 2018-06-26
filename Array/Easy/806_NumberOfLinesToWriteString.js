/**
 * Created by lizhelin on 18/6/25.
 */
var numberOfLines = function(widths, S) {
  var res = [];
  var unit = 0;
  var line = 1;
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  for(var i = 0; i < S.length; i++) {
    var index = letters.indexOf(S[i]);
    if(unit <= 100 - widths[index]) unit += widths[index];
    else {
      line++;
      unit = widths[index];
    }
  }
  res.push(line);
  if(unit !== 0) res.push(unit);
  return res;
};