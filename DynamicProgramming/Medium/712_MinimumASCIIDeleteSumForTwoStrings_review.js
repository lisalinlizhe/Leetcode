/**
 * Created by lizhelin on 18/8/26.
 */
//没思路
var minimumDeleteSum = function(s1, s2) {
  // Find Matches
  var best = [];
  best[s1.length] = [];
  best[s1.length][s2.length] = 0

  for (var i=s1.length-1; i>=0; i--) {
    best[i] = [];
    best[i][s2.length] = s1.charCodeAt(i) + best[i+1][s2.length];
  }
  for (var i=s2.length-1; i>=0; i--) {
    best[s1.length][i] = s2.charCodeAt(i) + best[s1.length][i+1];
  }

  for (var a=s1.length-1; a>=0; a--) {
    for (var b=s2.length-1; b>=0; b--) {
      var charA = s1.charCodeAt(a);
      var charB = s2.charCodeAt(b);
      if(charA === charB) {
        best[a][b] = best[a+1][b+1];
      } else {
        best[a][b] = Math.min(best[a+1][b] + charA, best[a][b+1] + charB);
      }
    }
  }
  return best[0][0];
}