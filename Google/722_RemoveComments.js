/**
 * Created by lizhelin on 18/9/17.
 */
var removeComments = function(paths) {
  var res = []
  var str = "";
  var mode = false;
  for(var i = 0; i < paths.length; i++) {
    var s = paths[i];
    for(var j = 0; j < s.length; j++) {
      if(mode) {
        if(s[j] === '*' && j < s.length - 1 && s[j + 1] === '/' ){
          mode = false;
          j++;
        }
      }
      else{
        if(s[j] === '/' &&  j < s.length - 1 && s[j + 1] === '/') {
          break;
        }
        else if(s[j] === '/' &&  j < s.length - 1 && s[j + 1] === '*'){
          mode = true;
          j++;
        }
        else str += s[j];
      }
    }
    if(!mode && str.length > 0) {
      res.push(str);
      str = "";
    }
  }
  return res;
};