/**
 * Created by lizhelin on 18/6/11.
 */
var largestTriangleArea = function(points) {
  var max = 0;
  var area = 0.0;
  for(var i = 0; i < points.length - 2; i++) {
    for(var j = i + 1; j < points.length - 1; j++) {
      for(var k = j + 1; k < points.length; k++) {
        area = Math.max(area, getArea(points[i], points[j], points[k]));
      }
    }
  }
  return area;
};

var getArea = function(pt1, pt2, pt3) {
  return Math.abs(pt1[0] * (pt2[1] - pt3[1]) + pt2[0] * (pt3[1] - pt1[1]) + pt3[0] * (pt1[1] - pt2[1])) / 2.0;
};