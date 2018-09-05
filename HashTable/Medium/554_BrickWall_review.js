/**
 * Created by lizhelin on 18/8/29.
 */
//so close, last for loop cannot figure out
var leastBricks = function(wall) {
  var map = {};
  var res = wall.length;
  for(var i = 0; i < wall.length; i++) {
    var sum = 0;
    for(var j = 0; j < wall[i].length - 1; j++) {
      sum += wall[i][j];
      if(map[sum] !== undefined) {
        map[sum]++;
      }
      else map[sum] = 1;
    }
  }
  var keys = Object.keys(map);
  for(var k = 0; k < keys.length; k++) {
    res = Math.min(res, wall.length - map[keys[k]]);
  }
  return res;
};