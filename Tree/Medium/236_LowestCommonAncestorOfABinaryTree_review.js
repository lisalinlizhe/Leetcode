/**
 * Created by lizhelin on 18/8/25.
 */
//It's recursive and expands the meaning of the function.
// If the current (sub)tree contains both p and q, then the function result is their LCA.
// If only one of them is in that subtree, then the result is that one of them.
// If neither are in that subtree, the result is null/None.
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) return root;
  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);
  return left == null ? right : right == null ? left : root;
};