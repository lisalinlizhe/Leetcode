/**
 * Created by lizhelin on 18/6/29.
 */
var str;
var tree2str = function(t) {
  if(t === null) return "";
  str = "";
  helper(t);
  return str;
};

var helper = function(node) {
  if(node === null) return;
  str += node.val;
  if(node.left !== null) {
    str += '(';
    helper(node.left);
    str += ')';
  }
  if(node.left === null && node.right !== null) {
    str += "()(";
    helper(node.right);
    str += ')';
  }else if(node.right !== null) {
    str += '(';
    helper(node.right);
    str += ')';
  }
}