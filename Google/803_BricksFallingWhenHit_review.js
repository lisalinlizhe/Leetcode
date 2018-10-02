/**
 * Created by lizhelin on 18/9/17.
 */
//完全没看懂.
var hitBricks = function(grid, hits) {
  var r = new Array(hits.length);
  var d = [-1, 0, 1, 0, -1];
  for(var i = 0; i < hits.length; i++) {
    var h = hits[i];
    grid[h[0]][h[1]] -= 1;
  }
  for(var i = 0; i < grid[0].length; i++){
    markAsWontFall(0, i, grid);
  }

  for(var k = hits.length - 1; k >= 0; k--) {
    var h = hits[k];
    var i = h[0];
    var j = h[1];
    grid[i][j] += 1;
    if(grid[i][j] == 1 && isConnected(i, j, grid, d)) {
      r[k] = markAsWontFall(i, j, grid) - 1;
    }
    else r[k] = 0;
  }
  return r;
};



var markAsWontFall = function(i, j, g){
  if(i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] !== 1) return 0;
  g[i][j] = 2;
  return 1 + markAsWontFall(i + 1, j, g) + markAsWontFall(i - 1, j, g) + markAsWontFall(i, j - 1, g) + markAsWontFall(i, j + 1, g)
}

var isConnected = function(i, j, g, d){
  if(i == 0) return true;
  for(var k = 1; k < d.length; k++){
    var r = i + d[k - 1], c = j + d[k];
    if(0 <= r && r < g.length && 0 <= c && c < g[0].length && g[r][c] == 2) return true;

  }
  return false;
}