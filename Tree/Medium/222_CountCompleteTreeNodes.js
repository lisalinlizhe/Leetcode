/**
 * Created by lizhelin on 18/8/25.
 */
var count;
var countNodes = function(root) {
  count = 0;
  helper(root);
  return count;
};

var helper = function(node) {
  if(node === null) return;
  count++;
  helper(node.left);
  if(node.left !== null) helper(node.right);
  else return;
};