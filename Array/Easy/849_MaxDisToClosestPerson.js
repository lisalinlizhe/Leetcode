/**
 * Created by lizhelin on 18/6/27.
 */
var maxDistToClosest = function(seats) {
  var sitted = [];
  for(var i = 0; i < seats.length; i++){
    if(seats[i] === 1) sitted.push(i);
  }
  if(sitted.length === 1) {
    if(sitted[0] - 0 < seats.length -1 - sitted[0]) return seats.length -1 - sitted[0];
    else return sitted[0] - 0;
  }
  var max = sitted[0];
  for(var j = 0; j < sitted.length - 1; j++){
    var dis = parseInt((sitted[j + 1] - sitted[j])/2);
    if(max < dis){
      max = dis;
    }
  }
  if(seats.length - 1 - sitted[sitted.length - 1] > max) return seats.length - 1 - sitted[sitted.length - 1];
  return max;
};