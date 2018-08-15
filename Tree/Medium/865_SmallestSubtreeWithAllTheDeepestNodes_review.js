/**
 * Created by lizhelin on 18/8/14.
 */
var subtreeWithAllDeepest = function(root) {
  if(root === null) return 0;
  var left = helper(root.left);
  var right = helper(root.right);

  if(left === right) return root;
  if(left > right) return subtreeWithAllDeepest(root.left);
  return subtreeWithAllDeepest(root.right);
};

var helper = function(node){
  if(node === null) return 0;
  return Math.max(helper(node.left), helper(node.right)) + 1;
};
