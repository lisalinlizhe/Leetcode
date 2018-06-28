/**
 * Created by lizhelin on 18/6/27.
 */
var floodFill = function(image, sr, sc, newColor) {
  var visited = new Array(image.length);
  for (var i = 0; i < image.length; i++) {
    visited[i] = new Array(image[0].length);
  }
  helper(image, sr, sc, image[sr][sc], newColor, visited);
  return image;
};

var helper = function(image, sr, sc, oldColor, newColor, visited) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc>= image[0].length) {
    return;
  }
  if(image[sr][sc] == oldColor && !visited[sr][sc]) {
    image[sr][sc] = newColor;
    visited[sr][sc] = true;
    helper(image, sr, sc+1, oldColor, newColor, visited);
    helper(image, sr, sc-1, oldColor, newColor, visited);
    helper(image, sr+1, sc, oldColor, newColor, visited);
    helper(image, sr-1, sc, oldColor, newColor, visited);
  }
}