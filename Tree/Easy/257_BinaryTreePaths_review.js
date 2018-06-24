/**
 * Created by lizhelin on 18/6/23.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var res;
var binaryTreePaths = function(root) {
  res = [];
  if(root !== null) helper(root, "", res);
  return res;
};

var helper = function(node, string, res) {
  if(node.left === null && node.right === null) res.push(string + node.val);
  if(node.left !== null) helper(node.left, string + node.val + "->", res);
  if(node.right !== null) helper(node.right, string+ node.val + "->", res);
};