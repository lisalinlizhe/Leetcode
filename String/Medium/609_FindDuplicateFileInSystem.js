/**
 * Created by lizhelin on 18/8/11.
 */
var findDuplicate = function(paths) {
  var res = [];
  var map = {};

  for(var i = 0; i < paths.length; i++) {
    var path = paths[i].split(' ');
    var startPoint = 0;
    for(var j = 0; j < path.length; j++) {
      var start = path[j].indexOf('(');
      var end = path[j].indexOf(')');
      startPoint = end;
      var content = path[j].substring(start + 1, end);
      if(content.length > 0){
        var temp = path[0] + '/' + path[j];
        if(map[content]) {
          map[content].push(temp.substring(0, temp.indexOf('(')));
        }
        else {
          var arr = new Array();
          arr.push(temp.substring(0, temp.indexOf('(')));
          map[content] = arr;
        }
      }
    }
  }
  var keys = Object.keys(map);
  for(var k = 0; k < keys.length; k++) {
    if(map[keys[k]].length > 1) res.push(map[keys[k]]);
  }
  return res;
};