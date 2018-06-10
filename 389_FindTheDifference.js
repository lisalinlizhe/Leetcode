/**
 * Created by lizhelin on 18/6/10.
 */
var findTheDifference = function(s, t) {
  for(var i = 0 ; i < t.length; i++) {
    var index = s.indexOf(t[i]);
    if(index === -1) return t[i];
    else{
      s = s.substring(0, index) + s.substring(index + 1, s.length);
    }
  }
};