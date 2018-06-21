/**
 * Created by lizhelin on 18/6/20.
 */
// BFS - use queue/stack to save the Tree;
var averageOfLevels = function(root) {
  var queue = [];
  queue.push(root);
  var res = [];
  while(queue.length !== 0) {
    var sum = 0;
    var count = queue.length;
    for(var i = 0 ; i < count; i++) {
      var node = queue.shift();
      sum += node.val;
      if(node.left !== null) queue.push(node.left);
      if(node.right !==null) queue.push(node.right);
    }
    res.push(sum / count);
  }
  return res;
};