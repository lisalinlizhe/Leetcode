/**
 * Created by lizhelin on 18/8/14.
 */
var insertIntoBST = function(root, val) {
  if(root === null) return new TreeNode(val);
  if(root.val < val) root.right = insertIntoBST(root.right, val);
  if(root.val > val) root.left = insertIntoBST(root.left, val);
  return root;
};