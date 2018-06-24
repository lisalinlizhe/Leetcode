/**
 * Created by lizhelin on 18/6/24.
 */
var b;
var isBalanced = function(root) {
  b = true;
  if(root === null) return true;
  var left = height(root.left);
  var right = height(root.right);
  return Math.abs(left - right) < 2 && b;
};

var height = function(node){
  if(node === null) return 0;
  if(node.left === null && node.right === null) return 1;
  var LH = height(node.left);
  var RH = height(node.right);
  if(Math.abs(LH - RH) >= 2) b = false;
  return Math.max(LH, RH) + 1;

};