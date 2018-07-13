/**
 * Created by lizhelin on 18/7/12.
 */
var maxArea = function(height) {
  var max = -Infinity
  var low = 0
  var hi = height.length - 1
  var h = 0
  while( low < hi ){
    var h = Math.min( height[low] , height[hi] )
    max = max > h*(hi-low) ? max : h*(hi-low)
    while(height[low] <= h && low < hi){ low++ }
    while(height[hi] <= h && low < hi){ hi-- }
  }
  return max
};