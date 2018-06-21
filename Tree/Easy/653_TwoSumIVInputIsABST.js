/**
 * Created by lizhelin on 18/6/20.
 */
var findTarget = function(root, k) {
  var map = {};
  var queue = [];
  queue.push(root);
  while(queue.length !== 0) {
    var count = queue.length;
    for(var i = 0; i < count; i++) {
      var node = queue.shift();
      if(map[node.val] !== undefined) return true;
      else map[k - node.val] = node.val;
      if(node.left !== null) queue.push(node.left);
      if(node.right !== null) queue.push(node.right);
    }
  }
  return false;
};