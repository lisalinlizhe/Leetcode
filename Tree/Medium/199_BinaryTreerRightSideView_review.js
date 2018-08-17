/**
 * Created by lizhelin on 18/8/16.
 */
var rightSideView = function(root) {
  if (!root) return [];
  var result = [];
  iterateRight(root, 0, result);
  return result;
};

var iterateRight = function(node, depth, result) {
  if (result[depth] === undefined) result[depth] = node.val;
  if (node.right) iterateRight(node.right, depth + 1, result);
  if (node.left) iterateRight(node.left, depth + 1, result);
}