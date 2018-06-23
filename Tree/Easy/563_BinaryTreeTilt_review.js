/**
 * Created by lizhelin on 18/6/22.
 */
var res;
var findTilt = function(root) {
  res = 0;
  helper(root);
  return res;
};

var helper = function(node) {
  if(node === null) return 0;

  var left = helper(node.left);
  var right = helper(node.right);

  res += Math.abs(left - right);

  return left + right + node.val;
};