/**
 * Created by lizhelin on 18/6/20.
 */
var sum;
var convertBST = function(root) {
  sum = 0;
  helper(root);
  return root;
};

var helper = function(root) {
  if(root === null) return null;
  helper(root.right);
  root.val += sum;
  sum = root.val;
  helper(root.left);
}