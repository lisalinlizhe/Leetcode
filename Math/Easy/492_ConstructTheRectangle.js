/**
 * Created by lizhelin on 18/6/26.
 */
var constructRectangle = function(area) {
  var res = [];
  var l = parseInt(Math.sqrt(area));
  while(l >= 1 && area % l !== 0) {
    l--;
  }
  if(area / l > l) {
    res.push(area/l);
    res.push(l);
  }
  else{
    res.push(l);
    res.push(area/l);
  }
  return res;
};