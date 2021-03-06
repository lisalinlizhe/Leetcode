/**
 * Created by lizhelin on 18/7/15.
 */
var buildTree = function(preorder, inorder) {
  return helper(0, preorder.length - 1, 0, inorder.length - 1, preorder, inorder);
};

var helper = function (p1, p2, i1, i2, preorder, inorder) {
  if (p1 > p2 || i1 > i2) return null;
  var value = preorder[p1],
      index = inorder.indexOf(value),
      nLeft = index - i1,
      root  = new TreeNode(value);
  root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1, preorder, inorder);
  root.right = helper(p1 + nLeft + 1, p2, index + 1, i2, preorder, inorder);
  return root;
}