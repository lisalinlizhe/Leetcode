/**
 * Created by lizhelin on 18/6/20.
 */
var invertTree = function(root) {
  if(root === null) return null;
  if(root.left || root.right) {
    var temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }
  else return root;
  return root;
};