/**
 * Created by lizhelin on 18/9/19.
 */
//没思路.
var d;
var cleanRoom = function(robot){
  var visited = {};
  d = [[-1 , 0], [0, 1], [1, 0], [0, -1]];
  find(robot, visited, 0, 0, 0);
};

var find = function(robot, visited, row, col, direction){
  var cur = row + ',' + col;
  visited[cur] = true;
  robot.clean();

  for(var i = 0; i < 4; i++){
    var direct = (direction + i) % 4;
    var next = d[direct];
    var nextRow = row + next[0];
    var nextCol = col + next[1];

    var temp = nextRow + ',' + nextCol;
    if(visited[temp] === undefined && robot.move()){
      find(robot, visited, nextRow, nextCol, direct);
      robot.turnLeft();
      robot.turnLeft();
      robot.move();
      robot.turnLeft();
      robot.turnLeft();
    }
    robot.turnRight();
  }
};







