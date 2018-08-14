/**
 * Created by lizhelin on 18/8/13.
 */
var height;
var leftNode;
var findBottomLeftValue = function(root) {
  height = 0;
  leftNode = root.val;
  helper(root, height);
  return leftNode;
};

var helper = function(node, h) {
  if(node === null) return;
  if(h > height) {
    height = h;
    leftNode = node.val;
  }
  helper(node.left, h+1);
  helper(node.right, h + 1);
};