/**
 * Created by lizhelin on 18/8/9.
 */
var simplifyPath = function(path) {
  var pathes = [];
  var skip = ['..', '.',''];
  var res = '';

  path = path.split('/');
  for(var i = 0; i < path.length; i++) {
    if(path[i] === '..' && pathes.length !== 0) pathes.pop();
    else if(skip.indexOf(path[i]) === -1) pathes.push(path[i]);
  }

  for(var j = 0; j < pathes.length; j++) {
    res += '/' + pathes[j];
  }
  return res.length === 0 ? '/' : res;

};