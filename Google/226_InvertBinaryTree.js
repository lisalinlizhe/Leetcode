/**
 * Created by lizhelin on 18/9/6.
 */
var invertTree = function(root) {
  if(root === null) return root;
  var temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};