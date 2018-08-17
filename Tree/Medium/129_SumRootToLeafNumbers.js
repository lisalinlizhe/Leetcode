/**
 * Created by lizhelin on 18/8/16.
 */
var res;
var sumNumbers = function(root) {
  var nums = [];
  res = 0;
  helper(root);
  return res;
};

var helper = function(node) {
  if(node === null) return;
  if(node.left === null && node.right === null) res += node.val;
  if(node.left !== null) node.left.val = node.val * 10 + node.left.val;
  if(node.right !== null) node.right.val = node.val * 10 + node.right.val;
  helper(node.left);
  helper(node.right);
};