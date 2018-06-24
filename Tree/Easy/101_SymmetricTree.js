/**
 * Created by lizhelin on 18/6/24.
 */
var isSymmetric = function(root) {
  if(root === null) return true;

  return helper(root.left, root.right);

  function helper(left, right) {
    if(!left) return right === null;
    if(!right) return left === null;
    if(left.val !== right.val) return false;
    return helper(left.left, right.right) && helper(left.right, right.left);
  }
};