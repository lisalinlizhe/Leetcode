/**
 * Created by lizhelin on 18/6/25.
 */
function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
};

var minDepth = function(root) {
  if(root === null) return 0;
  if(root.left === null && root.right === null) return 1;
  if(root.left === null) return 1+minDepth(root.right);
  if(root.right === null) return 1+  minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};