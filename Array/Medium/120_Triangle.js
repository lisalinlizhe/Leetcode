/**
 * Created by lizhelin on 18/7/14.
 */
var minimumTotal = function(triangle) {
  var row = triangle.length;
  for(var i = 1; i < row; i++) {
    for(var j = 0; j < triangle[i].length; j++) {
      if(j === 0) triangle[i][j] += triangle[i-1][j];
      else if(j === triangle[i].length - 1) triangle[i][j] += triangle[i - 1][j - 1];
      else triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
    }
  }
  var min = triangle[row - 1][0];
  for(var k = 1; k < triangle[row - 1].length; k++) {
    min = Math.min(min, triangle[row - 1][k]);
  }
  return min;
};