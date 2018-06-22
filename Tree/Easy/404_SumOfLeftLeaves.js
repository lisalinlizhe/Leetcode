/**
 * Created by lizhelin on 18/6/21.
 */
var sum;
var sumOfLeftLeaves = function(root) {
  sum = 0;
  helper(root, false);
  return sum;
};

var helper = function(root, flag) {
  if(root === null) return null;
  helper(root.left, true);
  if(flag & root.left === null && root.right === null) sum += root.val;
  helper(root.right, false);
};