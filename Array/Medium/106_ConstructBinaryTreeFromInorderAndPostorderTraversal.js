/**
 * Created by lizhelin on 18/7/15.
 */
var buildTree = function(inorder, postorder) {
  return helper(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};

var helper = function(inorder, postorder, a1, a2, b1, b2){
  if(a1 > a2 || b1 > b2) return null;
  var val = postorder[b2];
  var root = new TreeNode(val);
  var index = inorder.indexOf(val);
  var l = a2 - index;
  root.left = helper(inorder, postorder, a1, index - 1, b1, b1 + index - a1 - 1);
  root.right = helper(inorder, postorder,index + 1, a2, b1 + index - a1, b2 - 1);
  return root;
};