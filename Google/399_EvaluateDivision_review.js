/**
 * Created by lizhelin on 18/9/13.
 */
//用了DFS
var calcEquation = function(equations, values, queries) {
  //build the map
  var map = {};
  for(var i = 0; i < equations.length; i++) {
    if(map[equations[i][0]] === undefined){
      map[equations[i][0]] = {};
    }
    map[equations[i][0]][equations[i][1]] = values[i];

    if(map[equations[i][1]] === undefined){
      map[equations[i][1]] = {};
    }
    map[equations[i][1]][equations[i][0]] = 1/values[i];
  }

  var res = new Array(queries.length);
  for(var i = 0; i < queries.length; i++) {
    var para = [];
    if(calculate(map, queries[i][0], queries[i][1], para, [], 1.0)) res[i] = para[0];
    else res[i] = -1.0;
  }
  return res;
};

var calculate = function(map, num1, num2, para, visited, res){
  if(map[num1] === undefined || map[num2] === undefined || visited.indexOf(num1) !== -1) return false;
  if(num1 === num2) {
    para[0] = res;
    return true;
  }

  visited.push(num1);
  var keys = Object.keys(map[num1]);
  for(var j = 0; j < keys.length; j++){
    if(calculate(map, keys[j], num2, para, visited, res * map[num1][keys[j]])) return true;
  }
  var idx = visited.indexOf(num1);
  visited = visited.slice(0, idx).concat(visited.slice(idx + 1, visited.length));
  return false;
};