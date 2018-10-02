/**
 * Created by lizhelin on 18/9/9.
 */
// pay attention to where we put the map (where we init the map!).
var numberOfBoomerangs = function(points) {
  var res = 0;
  for(var i = 0; i < points.length; i++) {
    var map = {};
    for(var j = 0; j < points.length; j++) {
      if(i === j) continue;
      var dis = getDistance(points[i], points[j]);
      if(map[dis] !== undefined){
        res += map[dis] * 2;
        map[dis]++;

      }else map[dis] = 1;
    }
  }
  return res;
};

var getDistance = function(arr1, arr2){
  return Math.pow(arr1[0] - arr2[0], 2) + Math.pow(arr1[1] - arr2[1], 2);
};