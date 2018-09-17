/**
 * Created by lizhelin on 18/9/16.
 */
var maxDistToClosest = function(seats) {
  var map = {};
  var max = 0;
  var l = 0;
  var i = 0;
  while(i < seats.length && seats[i] === 0) {
    l++;
    i++;
  }
  for(i; i < seats.length; i++){
    if(seats[i] === 1) {
      if(map[1] !== undefined) {
        l = Math.max(l, i - map[1] - 1);
        map[1] = i;
      }
      else {
        map[1] = i;
        max = i;
      }
    }
  }
  var dis = l % 2 === 0? l / 2 : parseInt(l / 2) + 1;
  if(i === seats.length) dis = Math.max(dis, seats.length - 1 - map[1]);
  return Math.max(dis, max);
};