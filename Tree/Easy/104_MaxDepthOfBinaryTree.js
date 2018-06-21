/**
 * Created by lizhelin on 18/6/20.
 */
var maxDepth = function(root) {
  if(root === null) return 0;
  var queue = [];
  queue.push(root);
  var height = 0;
  while(queue.length !== 0) {
    height++;
    var count = queue.length;
    for(var i = 0; i < count; i++) {
      var node = queue.shift();
      if(node.left !== null) queue.push(node.left);
      if(node.right !== null) queue.push(node.right);
    }
  }
  return height;
};