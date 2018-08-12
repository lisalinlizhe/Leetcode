/**
 * Created by lizhelin on 18/8/12.
 */
var pruneTree = function(root) {
  if(root === null) return null;
  pruneTree(root.left);
  pruneTree(root.right);
  if(root.left !== null) {
    if(root.left.val === 0 && root.left.left === null && root.left.right === null) root.left = null;
  }
  if(root.right !== null) {
    if(root.right.val === 0 && root.right.left === null && root.right.right === null) root.right = null;
  }
  return root;
};