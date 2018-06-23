/**
 * Created by lizhelin on 18/6/23.
 */
// how to calculate a Tree's height

var h;
var diameterOfBinaryTree = function(root) {
  h = 0;
  if(root === null) return 0;
  height(root);
  return h;
};

var height = function(node){
  if(node === null) return 0;
  var left = height(node.left);
  var right = height(node.right);
  h = Math.max(h, left + right);
  return Math.max(left, right) + 1;
};
